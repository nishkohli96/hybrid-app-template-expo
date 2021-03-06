import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import DrawerLayout from '../components/DrawerLayout';

import HomeScreen from './HomeScreen';
import IntroScreen1 from '../components/IntroScreen1';
import IntroScreen2 from '../components/IntroScreen2';
import IntroScreen3 from '../components/IntroScreen3';

/* 
Refer https://reactnavigation.org/docs/drawer-navigator#checking-if-the-drawer-is-open 
*/
const Drawer = createDrawerNavigator();

const NavDrawer = () => {
    const navigation = useNavigation();

    function NotificationsScreen() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button
                    onPress={() => navigation.goBack()}
                    title="Go back home"
                />
            </View>
        );
    }

    return (
        <Drawer.Navigator
            initialRouteName="HomeScreen"
            overlayColor="transparent"
            drawerContent={(props) => <DrawerLayout {...props} />}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
            <Drawer.Screen name="IntroScreen1" component={IntroScreen1} />
            <Drawer.Screen name="IntroScreen2" component={IntroScreen2} />
            <Drawer.Screen name="IntroScreen3" component={IntroScreen3} />
        </Drawer.Navigator>
    );
};

export default NavDrawer;
