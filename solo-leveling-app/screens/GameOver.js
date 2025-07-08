import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function GameOver({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>GAME OVER</Text>
            <Text style={styles.description}>[YOU HAVE LOST]</Text>
            <Button title="Try again" onPress={() => navigation.replace('PlayerScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});