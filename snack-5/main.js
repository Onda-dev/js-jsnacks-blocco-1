// Crea un array vuoto.
const numbers = []
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

for (let i = 0; i < 6; i++) {
    const number = Number(prompt("Inserisci un numero"));
    if (number % 2 === 1) {
        numbers.push(number)
    }
}

console.log(numbers)
