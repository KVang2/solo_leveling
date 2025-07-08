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
    currentLevelXp,
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
        {label.charAt(0).toUpperCase() + label.slice(1)}:
      </Text>

      <Text style={styles.statValue}>
        {baseStats[label] + manualStats[label]} ({manualStats[label]})
      </Text>
        <Button title="[+]" onPress={() => handleAddPoint(label)} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hunter Stats</Text>
      <Text style={styles.level}>Level: {level}</Text>
      <Text style={styles.xp}>Xp: {currentLevelXp} / {nextLevelXp}</Text>
      <Text style={styles.bonus}>Unspent Bonus Points: {bonusPoints}</Text>

      {Object.keys(baseStats).map(renderStatRow)}

      <View style={{ marginTop: 20 }}>
        <Button title="Reset Bonus Points" onPress={handleReset} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#06121C',
    color: '#00BFFF',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00BFFF',
  },
  level: {
    fontSize: 20,
    marginBottom: 10,
    color: '#00BFFF',
  },
  xp: {
    fontSize: 16,
    marginBottom: 10,
    color: '#00BFFF',
  },
  bonus: {
    fontSize: 16,
    marginBottom: 20,
    color: '#00BFFF',
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
  },
  statLabel: {
    color: '#00BFFF',
    fontSize: 16,
    flex: 1,
  },
  statValue: {
    color: '#00BFFF',
    fontSize: 16,
    marginRight: 4,
  },
  statText: {
    fontSize: 16,
    color: '#00BFFF',
    flex: 1,
  },
});
