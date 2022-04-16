import React, { Component } from 'react';
import { Box, createTheme, CssBaseline, Link, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Plus Jakarta Sans'
    },
    palette: {
        error: {
            main: '#ff0033'
        },
        success: {
            main: '#00ffa2'
        }
    }
});

interface CustomThemeProviderProps {
    children: JSX.Element | Array<JSX.Element>
}

class CustomThemeProvider extends Component<CustomThemeProviderProps> {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Link href={"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap"} rel={"stylesheet"} />
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '2%',
                }}>
                    {this.props.children}
                </Box>
            </ThemeProvider>
        )
    }
}

export default CustomThemeProvider;