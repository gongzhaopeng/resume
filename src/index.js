import React from 'react';
import ReactDOM from 'react-dom';
import "@fontsource/roboto";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const origin = {
    alpha: 'alpha',
    beta: 'beta',
    eve: 'eve'
}
const target = {
    ...origin,
    [origin.alpha]: 'new-alpha'
}
console.log('target', target)

const destination = {earth: 'earth', moon: 'moon'}
const source_a = {mars: 'mars'}
const source_b = {mars: 'MARS', sun: 'sun'}
Object.assign(destination, source_a, source_b)
console.log('source_a', source_a)
console.log('source_b', source_b)
console.log('destination', destination)

const {alpha, ...other} = target
console.log('alpha', alpha)
console.log('other', other)

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
