// Dichiarazione della costante outputHtml

const outputHtml = document.getElementById("output");

// 1° prompt: numero di km da percorrere?

let numKm = prompt('Quanti chilomentri deve percorrere?');


// Tipizzazione della variabile numKm

numKm = parseFloat(numKm);

console.log(numKm);


// 2° prompt: età del passeggero?

let age = prompt('Quanti anni ha il passeggero?');

// Tipizzazione della variavbile age

age = parseInt(age);

console.log(age);


//  Definisco la variabile price

let price = numKm * 0.21;

console.log(price);

/* Se l'età del passeggero è < di 18 anni
 price è scontato del 20%,
altrimenti se l'età è > di 65 anni price è scontato del 40% */

if (age < 18) {
    price = price - (price * 0.2);
} else if (age > 65) {
    price = price - (price * 0.4);
}

console.log(price);

// Output visivo in html

price = Math.round(price * 100) / 100;

console.log(price);

outputHtml.innerHTML = `Il costo complessivo del biglietto è ${price} €`;

