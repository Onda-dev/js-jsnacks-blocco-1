// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// Inserisci un numero
const number = Number(prompt("Inserisci un numero"))

// se è pari stampa il numero
if (number % 2 === 0) {
    console.log(number)
}
// se è dispari stampa il numero successivo
else {
    console.log(number + 1)
}