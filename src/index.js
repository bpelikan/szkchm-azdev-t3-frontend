import React from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: 'f270162c-90ae-49d9-8a4f-f2378a74ff8d',
    },
});
appInsights.loadAppInsights();
appInsights.trackPageView();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
