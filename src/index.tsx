import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './apolloClient';
import { GlobalStyle } from './styles';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <GlobalStyle />
        {/* <DataProvider> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/* </DataProvider> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
