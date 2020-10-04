import React from 'react';
import { Text, Image, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import { AsyncStorage } from 'react-native';

const IntroScreen = () => {
    const navigation = useNavigation(); /* Navigation Hook */

    const gotoMainPage = async () => {
        await AsyncStorage.setItem('firstTime', 'false');
        navigation.navigate('NavDrawer');
    };

    const SkipBtn = () => {
        return <Text style={styles.skipBtn}>Skip</Text>;
    };

    const NextBtn = () => {
        return <Text style={styles.doneBtn}>Next</Text>;
    };

    const DoneBtn = () => {
        return (
            <Text style={styles.doneBtn} onPress={() => gotoMainPage()}>
                Done
            </Text>
        );
    };

    const PageImage = () => {
        return (
            <Image
                source={require('../assets/images/hi.png')}
                style={{ width: 250, height: 250 }}
            />
        );
    };

    // checkFirstUse();

    /* Refer https://www.npmjs.com/package/react-native-onboarding-swiper  */
    return (
        <Onboarding
            onSkip={() => gotoMainPage()}
            onDone={() => gotoMainPage()}
            nextLabel={<NextBtn />}
            skipLabel={<SkipBtn />}
            DoneButtonComponent={DoneBtn}
            pages={[
                {
                    backgroundColor: 'skyblue',
                    image: <PageImage />,
                    title: 'Welcome To LearnReactNative',
                    subtitle: 'Learn Fundamentals of React-Native',
                },
                {
                    backgroundColor: 'red',
                    image: <PageImage />,
                    title: 'Demos in the form of a List',
                    subtitle: 'Touch to view or expand for its description',
                },
                {
                    backgroundColor: 'yellow',
                    image: <PageImage />,
                    title: 'Enjoy....',
                    subtitle: 'Feel Free to Edit the Code and Experiment',
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 25,
        fontFamily: 'Piazzolla-Bold',
        margin: 10,
    },
    subHeading: {
        fontSize: 15,
        fontFamily: 'Piazzolla-Light',
        margin: 5,
    },
    doneBtn: {
        marginRight: 20,
        fontSize: 20,
        fontFamily: 'Piazzolla-Bold',
    },
    skipBtn: {
        marginLeft: 20,
        fontSize: 20,
        fontFamily: 'Piazzolla-Bold',
    },
});

export default IntroScreen;
