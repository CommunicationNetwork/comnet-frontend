import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/Dashboard';
import CustomThemeProvider from './components/theme/CustomThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <CustomThemeProvider>
        <Dashboard/>
    </CustomThemeProvider>
);
