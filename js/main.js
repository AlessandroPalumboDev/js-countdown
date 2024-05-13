'use strict';

// Creo variabile contdown con valore 10
let countdown = 10;

// Definisco la variabile di setInterval() di un secondo per avviare un countdown con una funzione anonima
const countdownInterval = setInterval(function () {
    // Stampo in console a ogni interazione
    console.log(countdown);
    // Decremento il contatore
    countdown--;

    // quando arriva a 0 viene interrotto da clearInteral()
    if (countdown < 0) {
        clearInterval(countdownInterval);
        // Stampa messaggio
        console.log('Buon anno!');
        alert('Buon anno!');
    }
}, 1000);