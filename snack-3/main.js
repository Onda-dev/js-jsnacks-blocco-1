// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// const firstNumber = Number(prompt("Inserisci il primo numero"))
// const secondNumber = Number(prompt("Inserisci il secondo numero"))
// const thirdNumber = Number(prompt("Inserisci il terzo numero"))

// console.log(firstNumber + secondNumber + thirdNumber)

let total = 0;

for (let i = 0; i < 10; i++) {
    const number = Number(prompt("Inserisci un numero"));
    total += number;
}

console.log(total);