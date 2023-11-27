import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import tasks from './reducers';
import reportWebVitals from './reportWebVitals';
// import {legacy_createStore as createStore} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
// import {devToolsEnhancer} from 'redux-devtools-extension';
import {composeWithDevTools} from 'redux-devtools-extension';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(tasks, composeWithDevTools(applyMiddleware(thunk)));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
