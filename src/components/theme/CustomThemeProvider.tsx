import React, { Component } from 'react';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({

});

interface CustomThemeProviderProps {
    children: JSX.Element | Array<JSX.Element>
}

class CustomThemeProvider extends Component<CustomThemeProviderProps> {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
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
                    backgroundColor: '#FFFAFA'
                }}>
                    {this.props.children}
                </Box>
            </ThemeProvider>
        )
    }
}

export default CustomThemeProvider;