import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './styles/styles.scss';

document.addEventListener('DOMContentLoaded', function(){

    const kitties = [
        {category: "male", age: "4", likesKids: true, name: "Fantomcat"},
        {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
        {category: "male", age: "2", likesKids: false, name: "Mr. Bigglesworth"},
        {category: "female", age: "1", likesKids: true, name: "Tom Cat"},
        {category: "female", age: "2", likesKids: false, name: "Bad Cat"},
        {category: "female", age: "3", likesKids: true, name: "Chococat"}
    ];

    ReactDOM.render(
        <App kitties={kitties}/>,
        document.getElementById('app')
    );

});