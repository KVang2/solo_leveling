// Planner
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlannerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Daily Workout</Text>
            <Text>- Push-ups x100</Text>
            <Text>- Squats x100</Text>
            <Text>- Crunches x100</Text>
            <Text>- Mile run x1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, marginBottom: 10 }
});