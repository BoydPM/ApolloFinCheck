import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export class BudgetScreen extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Budget</Text>
            </SafeAreaView>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
});
