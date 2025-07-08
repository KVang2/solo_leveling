// Home Screen
import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { XPContext } from '../xp'; // Import the XP context

export default function HomeScreen() {
    const { xp, setXp, rank, level, nextLevelXp, currentLevelXp, progress } = useContext(XPContext);

    const completeWorkout = () => setXp(prev => prev + 10); // Gain 10 XP

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Solo Leveling</Text>
                <Text style={styles.rank}> Rank: E</Text>
                <Text style={styles.level}>Level: {level}</Text>
                <Text style={styles.xp}>Xp: {currentLevelXp} / {nextLevelXp}</Text>
                <Text style={styles.progress}>Progress: {progress.toFixed(2)}%</Text>
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
        padding: 80,
        borderRadius: 10,
        borderColor: '#ffffff',
        borderWidth: 5,
        height: 400,
    },
    title: {
        color: '#00BFFF',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    rank: {
        color: '#00BFFF',
        fontSize: 26,
        marginRight: 10,
        marginBottom: 10,
    },
    level: {
        color: '#00BFFF',
        fontSize: 24,
        marginBottom: 10,
    },
    xp: {
        color: '#00BFFF',
        fontSize: 18,
        marginBottom: 10,
    },
    progress: {
        color: '#00BFFF',
        fontSize: 18,
        marginBottom: 20,
    },
});
// sample style