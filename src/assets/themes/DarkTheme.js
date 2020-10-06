import { DefaultTheme } from 'react-native-paper';
import { fontSizes } from './CommonStyles';

export const DarkTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: 'grey',
        background: '#181a18', //'#1f2421',
        card: 'green',
        text: '#d0dbd5',
        border: 'white',
        notification: 'grey',
        header: '#111211',
    },
    ...fontSizes
};
