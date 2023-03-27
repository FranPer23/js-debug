/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
    //mi serve un array per far funzionare il ciclo, a quel punto posso stampare nella console: console.log(nomeArray[i])
}


// ESERCIZIO 2
function addIfEven(num) {
    //devo aggiungere una costante (?)
    if (num % 2 = 0) {
    //num % 2 === 0
        return num + 5;
    //return qui non serve, qui avrò il calcolo
    }
    return num;
    //il risultato del calcolo esce fuori dalla funzione grazie a questo return
    
}


// ESERCIZIO 3

//mi serve un  array
// non ho bisogno della funzione
//una volta creato l'array >>> console.log(nomeArray[i])
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    //entrambi gli array devono essere dichiarati fuori dalla funzione
    for (let i = 0; i < numbers.length - 1; i++;) {
        //dopo i++ no ;
        if (numbers % 2 = 0); {
        // dopo la parentesi tonda no ;
        //il simbolo uguale deve essere ripetuto 3 volte
            evenNumbers.push(i);
            //il push deve avvenire nell'array evenNumbers
        }
        return evenNumbers;
        //questo return deve essere scritto prima dell'ultima graffa
    }
}
displayEvenNumbers(); // [2,4,6,8]