import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text } from 'react-native';
import IntroScreen from './IntroScreen';
import NavDrawer from './NavDrawer';

const Stack = createStackNavigator();

const Index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="IntroScreen">
                <Stack.Screen
                    name="IntroScreen"
                    component={IntroScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NavDrawer"
                    component={NavDrawer}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Index;
