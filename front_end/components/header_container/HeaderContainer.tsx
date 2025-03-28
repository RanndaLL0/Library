import { ReactNode } from "react"
import { View,StyleSheet } from "react-native"

interface ImageContainerProps {
    children: ReactNode
}

export default function ImageContainer( { children }: Readonly<ImageContainerProps> ) {
    return (
        <View style={ styles.container }>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.25,
        backgroundColor: 'white'
    }
})