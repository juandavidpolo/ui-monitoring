import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/styles/index.scss';

import { store } from './redux/store';
import App from 'src/App';
import logWebVitals from 'src/webVitals';

onCLS(logWebVitals);
onFCP(logWebVitals);
onLCP(logWebVitals);
onTTFB(logWebVitals);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
