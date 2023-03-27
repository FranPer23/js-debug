/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    // questa costante non ha nessuna utilità 
    const message = '';
    //le costanti dovrebbero essere dichiarate al di fuori della funzione

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
        //tra graffe deve comparire l'input dell'utente. quindi andrebbe scritto, al di fuori della funzione const userAge = parseInt(prompt ("dimmi la tua età")) e quindi `Sei troppo giovane! Hai ${userAge} anni!`
        
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    //questo è un array che va dichiarato al di fuori della funzione

    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
    //c'è un errore nella scrittura di length
}
printColorsNumber();


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}

addNumbers();

//la funzione in questo caso non serve, possiamo eliminarla ed effettuare l'operazione scrivendo: 
// const fixNumber = 12
// const userNumber = parseInt(prompt('Inserisci un numero'));
// const total = (userNumber + fixNumber)



// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
   
    const userEmail = prompt('Inserisci il tuo indirizzo email');
     //array e prompt si collocano fuori la funzione
    let grantAccess = 'false';
    
    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }
    //elimino da riga 70 a riga 74 
    //let messagge = "" fuori dalla funzione che poi verrà stampato in console 

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    //message = "accesso consentito"
    } else {
        console.log('Accesso negato!');
    //message = "accesso negato"
    }
}
checkAccess();
