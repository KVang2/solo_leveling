// Home Screen
import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { XPContext } from '../xp'; // Import the XP context

export default function HomeScreen() {
    const { xp, setXp, level, nextLevelXp, progress } = useContext(XPContext);

    const completeWorkout = () => setXp(prev => prev + 10); // Gain 10 XP

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Solo Leveling</Text>
            <Text style={styles.level}>Level: {level}</Text>
            <Text style={styles.xp}>XP: {xp} / {nextLevelXp}</Text>
            <Text style={styles.progress}>Progress: {progress.toFixed(2)}%</Text>
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
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    level: {
        fontSize: 24,
        marginBottom: 10,
    },
    xp: {
        fontSize: 18,
        marginBottom: 10,
    },
    progress: {
        fontSize: 18,
        marginBottom: 20,
    },
});
// sample style