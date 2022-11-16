/*Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

let controllaSePalindroma = prompt("Inserisci una parola da controllare se palindroma");

console.log(palindroma(controllaSePalindroma));

let scelta = prompt("secgli pari true o dispari false" );


if(scelta == true || scelta == false){
   
   let numUtente = prompt("Inserisci un numero da 1 a 5");
   let numRandom = random();

   let somma = somma(numRandom, numUtente);
   console.log(numUtente+ "+" +numRandom+ "=" + somma);

   if (numUtente<1 || numUtente>5){
      console.log("Non hai inserio un numero valido" + numUtente);
   }else if (pariDispari(numRandom)==pariDispari(numUtente)){
      console.log("HAI VINTO");
   
   }else{
      console.log("HAI perso");

   }
}else {
   console.log("Non hai inserito una scelta valida " + scelta);

}









// ----------------------------- FUNZIONI-------------------------------

// abituto con java stavo impzzendo con charAt ma let si puo usare come un array di caratteri
function palindroma (stringa){
   for (let i = 0; i < stringa.length/2; i++) {

      console.log(stringa[i]+":"+stringa[stringa.length - 1 - i])

      if (stringa[i] !== stringa[stringa.length - 1 - i]) { 
         return false;  // la strinfa non è palindroma
      }

   }
   return true;   // la stringa è palindroma
}

function random (){
   return Math.round(Math.random()*4)+1;
}

function somma (x,y){
   return x+y;

}

function pariDispari(num){
   if(num%2 == 0){
      return true;  // pari
   }else{
      return false;  // dispari
   }

}