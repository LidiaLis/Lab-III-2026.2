
import { useState } from "react";
import { Text, Button, View } from "react-native";

export default function Counter() {

    const [count, setCount] = useState(0);

    function incremento() {
        setCount(count+1);
        // console.log(cont);
    }
    
    function decremento() {
        setCount(count-1);
        // console.log(cont);
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text >Quantidade: {count}</Text>
            <View style={{ width: 150, marginTop: 10, gap: 10 }}>
                <Button title="Aumentar" onPress={incremento}  />
                <Button title="Diminuir" onPress={decremento} />
            </View>
        </View>
    );
}