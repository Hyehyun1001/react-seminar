import React from 'react';
import LoginForm from './components/LoginForm';
import './components/LoginForm.css';

const App = () => {
    return (
        <body style={{
            fontStyle: 'normal',
            backgroundColor: 'wheat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        }}>
        <LoginForm />
        </body>
    );
};

export default App;