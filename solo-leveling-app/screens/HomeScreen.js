// Home Screen
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
    const [xp, setXp] = useState(0);
    const level = Math.floor(xp / 100) + 1; // Assuming 100 XP per level
    const nextLevelXp = (level + 1) * 100; // XP needed for the next level
    const progress = ((xp % 100) / 100) * 100; // Progress towards the next level

    const completeWorkout = () => setXp(prev => prev + 10); // Gain 25 XP for completing a workout

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Solo Leveling</Text>
            <Text style={styles.level}>Level: {level}</Text>
            <Text style={styles.xp}>XP: {xp} / {nextLevelXp}</Text>
            <Text style={styles.progress}>Progress: {progress.toFixed(2)}%</Text>
            <Button title="Complete Workout" onPress={completeWorkout} />
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