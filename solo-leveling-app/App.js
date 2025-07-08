import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import QuestScreen from './screens/QuestScreen';
import Stats from './screens/Stats';
import GameOver from './screens/GameOver';
import PlayerScreen from './screens/PlayerScreen';
import LoginScreen from './screens/LoginScreen';

import { scheduleDailyWarning } from './utils/Warning';
import { XPProvider } from './xp';

// Bottom tab navigator (for after login)
const Tab = createBottomTabNavigator();
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Quest" component={QuestScreen} />
      <Tab.Screen name="Stats" component={Stats} />
    </Tab.Navigator>
  );
}

// Stack navigator (for onboarding and login)
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    scheduleDailyWarning();
  }, []);

  return (
    <XPProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PlayerScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="GameOver" component={GameOver} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </XPProvider>
  );
}
