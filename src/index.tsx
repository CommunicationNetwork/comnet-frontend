import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css'
import CustomThemeProvider from 'components/theme/CustomThemeProvider';
import Dashboard from 'components/Dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <CustomThemeProvider>
        <Dashboard/>
    </CustomThemeProvider>
);
