import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { XPContext } from '../xp';

export default function QuestScreen() {
  const { xp, setXp } = useContext(XPContext);

  const [inputs, setInputs] = useState({
    pushups: '',
    squats: '',
    crunches: '',
    situps: '',
  });

  const [completedToday, setCompletedToday] = useState(false);

  const handleInputChange = (name, value) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const isAllValid = () => {
    return (
      parseInt(inputs.pushups) >= 100 &&
      parseInt(inputs.squats) >= 100 &&
      parseInt(inputs.crunches) >= 100 &&
      parseInt(inputs.situps) >= 100
    );
  };

  const completeWorkout = () => {
    // if (completedToday) {
    //  Alert.alert("Completed", "You’ve already completed today’s quest.");
    //  return;
    // }

    if (!isAllValid()) {
      Alert.alert("Incomplete", "Each workout must be complete.");
      return;
    }

    const xpGained = 40; // 10 XP per task
    setXp(prev => prev + xpGained);
    // setCompletedToday(true);
    Alert.alert("Quest Complete!", `You gained ${xpGained} XP.`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>Daily Quest</Text>

        {["pushups", "squats", "crunches", "situps"].map((key) => (
          <View key={key} style={styles.inputGroup}>
            <Text style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)} (min: 100)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={inputs[key]}
              onChangeText={(text) => handleInputChange(key, text)}
            />
          </View>
        ))}

        <Button
          title="Complete Workout"
          onPress={completeWorkout}
          disabled={completedToday}
        />

        <Text style={styles.xp}>Current XP: {xp}</Text>
        {completedToday && <Text style={styles.doneText}>You’ve completed today’s quest!</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, marginBottom: 10 },
  inputGroup: { marginBottom: 12 },
  label: { fontSize: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginTop: 4
  },
  xp: { marginTop: 20, fontSize: 16 },
  doneText: { color: 'green', marginTop: 10, fontSize: 16 }
});
