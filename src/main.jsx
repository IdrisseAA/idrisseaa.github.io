import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

const THEME_KEY = 'theme';

const applyTheme = (theme) => {
    const root = document.documentElement;

    if (theme === 'light' || theme === 'dark') {
        root.setAttribute('data-theme', theme);
        return;
    }

    root.setAttribute('data-theme', 'dark');
};

const storedTheme = localStorage.getItem(THEME_KEY) || 'dark';
applyTheme(storedTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);