import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Filter} from '../../components/Filter';
import { FilterStatus } from '../../types/FilterStatus';
import { Item } from '../../components/Item';
import { useState } from 'react';

const FILTER_STATUS: FilterStatus[] = [
	FilterStatus.PENDING, FilterStatus.DONE
];

export function Home() {
    const[filter, setFilter] = useState(FilterStatus.PENDING)
	  const [description, setDescription] = useState("");
    const [items, setItems] = useState<any>([]);


  return (
    <View style={styles.container}>
      <Image 
        source={require("@/assets/logo.png")} 
        style={styles.logo} 
      />   

      <View style={styles.form}>
        <Input 
          placeholder="O que você precisa" 
          onChangeText={(value) => setDescription(value)}
        />

        <Button title="Adicionar" 
	        activeOpacity={0.2} 
	        onPress={() => console.log("Adicionar")} 
	      />
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter 
              key={status} 
              status={status} 
              isActive={status === filter}               
              onPress={() => setFilter(status)}
            />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

<FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("Mudar o status")}
              onRemove={() => console.log("Remover item")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          
          />
      </View>
    </View>
  );
}