import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'

import "./css/animate.css"
import "./css/icomoon.css"
import "./css/ionicons.min.css"
import "./css/bootstrap.min.css"
import "./css/magnific-popup.css"
import "./css/flexslider.css"
import "./css/owl.carousel.min.css"
import "./css/owl.theme.default.min.css"
import "./css/bootstrap-datepicker.css"
import "./fonts/flaticon/font/flaticon.css"

// Administrator

import { store } from './state/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
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
<div class="gototop js-top">
  <a href="#" class="js-gotop"><i class="ion-ios-arrow-up"></i></a>
</div>