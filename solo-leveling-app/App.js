import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import QuestScreen from './screens/QuestScreen';
import Stats from './screens/Stats';
import { useEffect } from 'react';
import { scheduleDailyWarning } from './utils/Warning';
import { XPProvider } from './xp';


const Tab = createBottomTabNavigator();


export default function App() {
    useEffect(() => {
        // Schedule the daily warning notification
        scheduleDailyWarning();
    }, []);

    return (
        <XPProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Quest" component={QuestScreen} />
                    <Tab.Screen name="Stats" component={Stats} />
                </Tab.Navigator>
            </NavigationContainer>
        </XPProvider>
    );
}