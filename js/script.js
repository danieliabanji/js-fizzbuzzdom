"use strict";


// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const boxContainer = document.querySelector('div');

for ( let i = 1; i <= 100; i++){
    console.log(i);

    // variabile
    let fizzBuzz;

    // multipli di 3 e 5 stampo fizzbuzz
    if (i % 3 == 0 && i % 5 == 0){
        fizzBuzz = 'fizzbuzz';
        console.log(fizzBuzz);
    // multipli di 3 stampo fizz
    } else if (i % 3 == 0){
        fizzBuzz = 'fizz';
        console.log(fizzBuzz);
    // multipli di 5 stampo buzz
    } else if (i % 5 == 0){
        fizzBuzz = 'buzz';
        console.log(fizzBuzz);
    // numeri che non corrispondono ai multipli di 3 e 5 sono numeri normali
    } else {
        fizzBuzz = i;
        console.log(i);
    }

    boxContainer.innerHTML += `<div class="box ${fizzBuzz}">${fizzBuzz}</div>`;
}






