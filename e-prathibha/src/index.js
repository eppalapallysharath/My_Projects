import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { persistor, Store } from './Redux/Store';
import {PersistGate} from "redux-persist/integration/react"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={Store}>
  <PersistGate persistor = {persistor}  >
    <App />
    </PersistGate>
  </Provider>
  </React.StrictMode>
);


