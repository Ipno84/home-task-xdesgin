import { persistor, store } from './state/store';

import GlobalStyle from './components/containers/GlobalStyle';
import { Normalize } from 'styled-normalize';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import Setup from './components/containers/Setup';
import { ThemeProvider } from 'styled-components';
import Ui from './components/layout/pages/Ui';
import theme from './constants/ThemeConstants';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Normalize />
                    <GlobalStyle />
                    <Setup />
                    <Ui />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
