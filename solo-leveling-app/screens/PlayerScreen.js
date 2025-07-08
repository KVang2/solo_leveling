import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function PlayerScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>QUEST</Text>
            <Text style={styles.description}>[WOULD YOU LIKE TO BECOME A PLAYER?]</Text>
            <Button title="Yes" onPress={() => navigation.navigate('Login')} />
            <Button title="No" onPress={() => navigation.navigate('GameOver')} />
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