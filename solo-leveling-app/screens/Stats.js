import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { XPContext } from '../xp';

export default function StatsScreen() {
  const {
    xp,
    level,
    nextLevelXp,
    bonusPoints,
    setBonusPoints,
    baseStats,
    setBaseStats,
  } = useContext(XPContext);

  const [manualStats, setManualStats] = useState({
    health: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    agility: 0,
    intelligence: 0,
    strength: 0,
    stamina: 0,
    mana: 0,
  });

  const handleAddPoint = (stat) => {
    if (bonusPoints <= 0) return;

    setManualStats(prev => ({
      ...prev,
      [stat]: prev[stat] + 1,
    }));

    setBonusPoints(prev => prev - 1);
  };

  const handleReset = () => {
    // Refund all spent manual points
    const totalSpent = Object.values(manualStats).reduce((a, b) => a + b, 0);
    setBonusPoints(prev => prev + totalSpent);

    // Reset manual stats
    setManualStats({
      health: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      agility: 0,
      intelligence: 0,
      strength: 0,
      stamina: 0,
      mana: 0,
    });

    Alert.alert('Reset Complete', 'All bonus points have been refunded.');
  };

  const renderStatRow = (label) => (
    <View style={styles.statRow} key={label}>
      <Text style={styles.statText}>
        {label.charAt(0).toUpperCase() + label.slice(1)}: {baseStats[label] + manualStats[label]} (Bonus: {manualStats[label]})
      </Text>
      <Button title="+" onPress={() => handleAddPoint(label)} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hunter Stats</Text>
      <Text style={styles.level}>Level: {level}</Text>
      <Text style={styles.xp}>XP: {xp} / {nextLevelXp}</Text>
      <Text style={styles.bonus}>Unspent Bonus Points: {bonusPoints}</Text>

      {Object.keys(baseStats).map(renderStatRow)}

      <View style={{ marginTop: 20 }}>
        <Button title="Reset Bonus Points" onPress={handleReset} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 15 },
  level: { fontSize: 20, marginBottom: 10 },
  xp: { fontSize: 16, marginBottom: 10 },
  bonus: { fontSize: 16, marginBottom: 20 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, width: '100%' },
  statText: { fontSize: 16, flex: 1 },
});
