import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppRouter from './Router';
import { defaultTheme } from '../../styles/themes';

const App = () => {
    const [theme] = React.useState(defaultTheme);

    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
