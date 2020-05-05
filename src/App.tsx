import React, { ReactElement } from 'react';
import { persistor, store } from './state/store';

import GlobalStyle from './components/containers/GlobalStyle';
import Home from './components/layout/pages/Home';
import { Normalize } from 'styled-normalize';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './constants/ThemeConstants';

/**
 * First rendered component. It contains Store and Theme providers,
 * components strictly related to application global style and
 * main component Home
 *
 * @returns {ReactElement}
 */
const App: React.FC = (): ReactElement => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Normalize />
                    <GlobalStyle />
                    <Home />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
