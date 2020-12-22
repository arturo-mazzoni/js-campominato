// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50



numeriRandom = [];
numeriUtente = [];


while (numeriRandom.length < 16) {
  var numero = generaRandom(1, 100);
  if (numeriRandom.includes(numero) == false) {
    numeriRandom.push(numero);
  }
}
console.log(numeriRandom);

sentinella = true;

while (numeriUtente.length < 84 && sentinella == true ) {
  var n = parseInt(prompt("inserisci un numero da 1 a 100"));

  if (numeriUtente.includes(n) == false && numeriRandom.includes(n) == false) {
    numeriUtente.push(n);
  } else {
    alert("Hai perso");
    sentinella = false;
  }
}
console.log(numeriUtente);

alert("Il tuo punteggio è " + numeriUtente.length);


//FUNCTIONS

function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
