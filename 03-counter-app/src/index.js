import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDomClient from 'react-dom/client';
// import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');
// ReactDOM.render(<PrimeraApp />, divRoot);
const root = ReactDomClient.createRoot(divRoot);
// root.render (<PrimeraApp saludo="Hola Mundo" />);
root.render (<CounterApp value={ 10 } />);