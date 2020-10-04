import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const DrawerHeader = ({ title }) => {
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <Icon
                name="arrow-back"
                size={30}
                color="#900"
                onPress={() => navigation.goBack()}
            ></Icon> 
            <View style={styles.halfRow}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        textAlign: "center",
        display: 'flex',
        justifyContent: 'center'
    },
    halfRow: {
    },
    headerText: {
        fontSize: 22,
    }
});

export default DrawerHeader;