import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import style from './index.module.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className={style}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);