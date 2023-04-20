// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Dimmi una parola")
document.getElementById("parolaInserita").innerHTML = parola;
var parolaInversa = invertiParola(parola);


if(parola == parolaInversa){
    document.getElementById("risultato").innerHTML = ('la parola è palindroma');
  } else {
    document.getElementById("risultato").innerHTML = ('la parola non è palindroma');
  }
  
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}