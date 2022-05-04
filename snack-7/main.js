// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

// Creare una lista con di nomi
const nameList = ["Manuel", "Stefano", "Pasquale", "Pippo", "Franco"]
// Creare una lista con di cognomi
const lastNameList = ["Altieri", "Bianchi", "Perisic", "Brozovic", "Handanovic"]
// Creare lista con combinazione di nomi e cognomi
const combinedList = []

for (let i = 0; i < 10; i++) {
    const randomName = nameList[Math.floor(Math.random()*nameList.length)]
    const randomLastname = lastNameList[Math.floor(Math.random()*lastNameList.length)]
    const combined = randomName + " " + randomLastname
    combinedList.push(combined)[i]
}

console.log(combinedList)