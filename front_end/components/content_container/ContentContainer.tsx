import { ReactNode } from "react";
import { View,StyleSheet } from "react-native";

interface ContentContainerProps{
    children: ReactNode
}

export default function ContentContainer( { children }: Readonly<ContentContainerProps> ) {
    return (
        <View style={ styles.container }>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.75,
        backgroundColor: "#101010",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
})