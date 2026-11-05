import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

type Props = {
    title: string
    onPress?: () => void
    activeOpacity?: number
}

export function Button({ title, activeOpacity, onPress }: Props) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={activeOpacity} 
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}