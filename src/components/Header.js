import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <Icon
                name="menu"
                size={30}
                color="#900"
                onPress={() => navigation}
            ></Icon>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20
    }
});

export default Header;