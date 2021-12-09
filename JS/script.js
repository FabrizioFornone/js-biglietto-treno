// Costanti applicativi

const pricePerKm = 0.21;

const discount18 = 0.2;

const discount65 = 0.4;

// 1° prompt: numero di km da percorrere?

let numKm = prompt("Quanti chilometri deve percorrere?");

// Tipizzazione della variabile numKm

numKm = parseFloat(numKm);

console.log(numKm);

// 2° prompt: età del passeggero?

let age = prompt("Quanti anni ha il passeggero?");

// Tipizzazione della variavbile age

age = parseInt(age);

console.log(age);

// Costante button

const button = document.getElementById("button-box");

// Se non sono numeri insulta l'utente se sono numeri procedi

if (isNaN(numKm) || isNaN(age)) {
  button.innerHTML = "Sei scemo? Inserisci solo numeri";
} else {
  button.addEventListener('click', function () {
    let price = numKm * pricePerKm;

    console.log(price);

    /* Se l'età del passeggero è < di 18 anni
    price è scontato del 20%,
    altrimenti se l'età è > di 65 anni price è scontato del 40% */

    if (age < 18) {
      price = price - price * discount18;
    } else if (age > 65) {
      price = price - price * discount65;
    }

    console.log(price);

    // Output visivo in html

    price = price.toFixed(2);

    console.log(price);

    button.innerHTML += `<br/> Il costo complessivo del biglietto è ${price} €`;
  });
}
