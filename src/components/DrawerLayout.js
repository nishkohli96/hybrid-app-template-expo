import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import packageJson from '../../package.json';
import {
    ThemedView,
    ThemedText,
} from '../components/styled-components/ThemedComps';

const DrawerLayout = (props) => {
    const navigation = useNavigation();
    const { t } = useTranslation('common');

    return (
        <ThemedView style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri:
                                        'https://api.adorable.io/avatars/50/abott@adorable.png',
                                }}
                                size={50}
                            />
                            <View
                                style={{
                                    marginLeft: 15,
                                    flexDirection: 'column',
                                }}
                            >
                                <ThemedText style={styles.title}>
                                    {t('USER.hiuser', { userName: 'Guest' })}
                                </ThemedText>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="md-home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={() => (
                                <ThemedText>{t('DRAWER.home')}</ThemedText>
                            )}
                            onPress={() => {
                                navigation.navigate('HomeScreen');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="person-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={() => (
                                <ThemedText>{t('DRAWER.profile')}</ThemedText>
                            )}
                            onPress={() => {
                                navigation.navigate('Notifications');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="notifications-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={() => (
                                <ThemedText>
                                    {t('DRAWER.notifications')}
                                </ThemedText>
                            )}
                            onPress={() => {
                                navigation.navigate('IntroScreen3');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={() => (
                                <ThemedText>{t('DRAWER.settings')}</ThemedText>
                            )}
                            onPress={() => {
                                navigation.navigate('IntroScreen1');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="chatbox-ellipses-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={() => (
                                <ThemedText>{t('DRAWER.help')}</ThemedText>
                            )}
                            onPress={() => {
                                navigation.navigate('IntroScreen2');
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label={() => (
                        <ThemedText>
                            {t('APP.version', {
                                appVersion: packageJson.version,
                            })}
                        </ThemedText>
                    )}
                />
            </Drawer.Section>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 25,
        marginTop: 8,
        fontWeight: '100',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default DrawerLayout;
