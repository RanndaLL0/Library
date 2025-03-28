import { ReactNode } from "react"
import { SafeAreaView,StyleSheet } from "react-native"

interface ScreenSetProps {
    children: ReactNode
}

export default function ScreenSet( { children }: Readonly<ScreenSetProps> ) {
    return(
        <SafeAreaView style={ styles.container }>
            { children }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    }
});