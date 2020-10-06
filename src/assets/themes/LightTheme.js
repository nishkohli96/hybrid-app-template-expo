import { DefaultTheme } from 'react-native-paper';
import { fontSizes } from './CommonStyles';

export const LightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ffffff',
        background: '#f2f2e9',
        card: 'lightgreen',
        text: '#000000',
        border: 'silver',
        notification: 'silver',
        header: '#f2f2cb',
    },
    ...fontSizes
};
