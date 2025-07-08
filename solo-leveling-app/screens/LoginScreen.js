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
      <Text>Enter Your Hunter Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="e.g. Sung Jin-Woo" />
      <Button title="Enter" onPress={handleLogin} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
};