import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'redux/store';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ManageThemeProvider } from 'core/theme/ThemeContext';
import './stylesheet/global.css';
import './core/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename='goosetrack-team-project-front'>
            <Provider store={store}>
                {/* <PersistGate loading={null} persistor={persistor}> */}
                <ManageThemeProvider>
                    <App />
                </ManageThemeProvider>
                {/* </PersistGate> */}
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
