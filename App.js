import React from 'react';
import Index from './src/screens/Index';
import { I18nextProvider } from 'react-i18next';
import geti18config from './src/i18n/i18config';

const AppConfig = () => {
    return (
        <I18nextProvider i18n={geti18config()}>
            <Index />
        </I18nextProvider>
    );
};

export default function App() {
    return <AppConfig />;
}
