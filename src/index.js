import React from 'react';
import ReactDOM  from 'react-dom';
import CounterApp from './CounterApp';7
//import PrimeraApp from './PrimeraApp';

import './index.css';


const divRoot = document.querySelector('#root');

//ReactDOM.render(<PrimeraApp saludo="Hola, soy Goku" />, divRoot);
ReactDOM.render(<CounterApp value={5} />, divRoot);