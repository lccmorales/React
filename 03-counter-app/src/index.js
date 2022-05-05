import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDomClient from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';
import './index.css';

// ReactDOM.render(<PrimeraApp />, divRoot);
const root = ReactDomClient.createRoot(document.querySelector('#root'));
root.render(<React.StrictMode><PrimeraApp saludo="Hola Mundo" /></React.StrictMode>);
// root.render (<CounterApp value={ 10 } />);
