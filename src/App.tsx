import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';

import history from './utils/history';

import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router history={history}>
                <Routes />
            </Router>
        </AuthProvider>
    );
};

export default App;
