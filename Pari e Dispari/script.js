//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let paroDisp = prompt("pari o dispari?")
let numUno = prompt("inserisci un numero da 1 a 5")

document.getElementById("sceltaUno").innerHTML = paroDisp;
document.getElementById("sceltaDue").innerHTML = numUno;

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function casuale() {
    numDue = Math.round(Math.random()*5)+1;
    document.getElementById("casuale").innerHTML ="scelta computer numero: " + numDue;
    if (numDue % 2 ==0) {
        document.getElementById("risComp").innerHTML = "pari";
        
    }else {
        document.getElementById("risComp").innerHTML = "dispari";
       }
}
//Sommiamo i due numeri

function somma() {
   sommaNum = (+numUno) + (+numDue);
   document.getElementById("numTre").innerHTML = sommaNum;

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

   if (sommaNum % 2 ==0) {
    document.getElementById("risFinale").innerHTML = "pari";
    
   }else {
    document.getElementById("risFinale").innerHTML = "dispari";
   }
}

//Dichiariamo chi ha vinto.

function vincitore() {
    if (sommaNum == numDue) {
        document.getElementById("vincitore").innerHTML = "il vincitore é l'utente";  
    }else {
        document.getElementById("vincitore").innerHTML = "il vincitore é il computer";
    }
     


}

