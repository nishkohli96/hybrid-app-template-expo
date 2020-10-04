import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const DrawerHeader = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Icon
                name="arrow-back"
                size={30}
                color="#900"
                onPress={() => navigation.goBack()}
            ></Icon>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        textAlign: 'center',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 22,
        marginLeft: 20,
    },
});

export default DrawerHeader;
