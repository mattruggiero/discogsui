import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


//redux
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';


//components

import App from './App';



 const store = createStore(reducer);

ReactDOM.render(
                <Provider store = {store}>
                    <App/>
                </Provider>, 
                document.getElementById('root'));


export default store;


serviceWorker.unregister();
