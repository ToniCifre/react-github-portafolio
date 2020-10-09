import React from 'react';
import ReactDOM from 'react-dom';

import './css/App.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import { TranslationsProvider } from 'context-multi-language';
import {translations} from "./translator";

let selectedLang = localStorage.getItem('lang') || ''
if(selectedLang === '' || !translations.languages.includes(selectedLang)) {
    selectedLang = 'en'
    localStorage.setItem('lang', selectedLang)
}



ReactDOM.render(
  <React.StrictMode>
      <TranslationsProvider translations={translations} defaultLocale={selectedLang}>
          <App />
      </TranslationsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
