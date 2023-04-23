import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { BrowserRouter } from 'react-router-dom';
import { ManageThemeProvider } from 'core/theme/ThemeContext';
import './stylesheet/global.css';
import './core/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ManageThemeProvider>
                <App />
            </ManageThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
