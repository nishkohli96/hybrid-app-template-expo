import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DrawerHeader from '../components/DrawerHeader';
import IntroScreen1 from '../components/IntroScreen1';
import IntroScreen2 from '../components/IntroScreen2';
import IntroScreen3 from '../components/IntroScreen3';

const Tab = createMaterialBottomTabNavigator();
/* Refer https://reactnavigation.org/docs/material-bottom-tab-navigator  */

const HomeScreen = () => {
    const InitialScreen = () => {
        return (
            <>
                <DrawerHeader />
                <IntroScreen1 />
            </>
        );
    };

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="orange"
            style={{ backgroundColor: 'tomato' }}
            barStyle={{ backgroundColor: '#694fad' }}
            shifting={true}
            backBehavior="order"
        >
            <Tab.Screen
                name="Feed"
                component={InitialScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Icon name="home" color="white" size={26} />
                    ),
                    tabBarColor: 'crimson',
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={IntroScreen2}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: () => (
                        <Icon name="bell" color="white" size={26} />
                    ),
                    tabBarColor: 'royalblue',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={IntroScreen3}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <Icon name="account" color="white" size={26} />
                    ),
                    tabBarColor: 'brown',
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeScreen;
