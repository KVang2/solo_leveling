import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleLogin = () => {
    // Save user name locally (AsyncStorage or Context API)
    navigation.replace('MainTabs'); // Navigate to main tabs after login
  };

  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>Enter Your Hunter Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="e.g. Sung Jin-Woo" />
            <Button title="Enter" onPress={handleLogin} />
        </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010B13',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#00BFFF',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    color: '#00BFFF',
  },
    title: {
        fontSize: 24,
        marginBottom: 25,
        color: '#00BFFF',
    },
      box: {
        padding: 20,
        borderRadius: 10,
        borderColor: '#ffffff',
        borderWidth: 2,
        width: '85%',
        alignItems: 'center',
        textColor: '#00BFFF',
    },
};