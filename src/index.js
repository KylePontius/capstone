import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';


ReactDOM.render(
    <StrictMode>
    <App />
    </StrictMode>,
    document.getElementById("root")
);

