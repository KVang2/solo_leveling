import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function PlayerScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>QUEST</Text>
                <Text style={styles.description}>[WOULD YOU LIKE TO BECOME A PLAYER?]</Text>
                <View style={styles.button}>
                    <Button title="Yes" onPress={() => navigation.navigate('Login')} />
                    <Button title="No" onPress={() => navigation.navigate('GameOver')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#06121C',
    },
    box: {
        backgroundColor: '#010B13',
        padding: 20,
        borderRadius: 2,
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 10,
        width: '85%',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#00BFFF',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#00BFFF',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
        marginTop: 20,
    },
});