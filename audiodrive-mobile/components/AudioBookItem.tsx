import { View, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

export interface Props {
    name: String;
    image: string;
}

export function AudioBookItem({name, image}: Props) {
    const {colors} = useTheme()
    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image} />
            <Text style={{color: colors.text}}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       width: "50%",
       justifyContent: "center",
       alignItems: "center"
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain',
        height: 150,
    }
})