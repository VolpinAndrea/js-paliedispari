// let listaSpesa = ["avocado", "uova", "pane", "latte", "succo", "patatine", "sale", "sale", "olio"];

// // IL SALE NON PIACE ALL'HTML?
// console.log("STAMPA FOR");

// for (let i = 0; i < listaSpesa.length; i++) {
//    console.log(listaSpesa[i]);

// }

// console.log("STAMPA WHILE");
// let j = 0;
// while(j < listaSpesa.length){

//     console.log(listaSpesa[j]);
//     j++

// }

// let elenco = document.querySelector(".elencoPuntato");
// let pulsanteX = '<button type="button" class="cancella">X</button>'; 

// for (let i = 0; i < listaSpesa.length; i++) {
//     elenco.innerHTML += "<div><li class= \"elemento my-2\"><h4>"+listaSpesa[i]+"</h4>"+pulsanteX+"</li></div>";
//  }

//  let aggButton = document.getElementById("aggiungi");

//  aggButton.addEventListener('click', function(){

//     let aggiunta = prompt("Quale elemento vuoi aggiungere?");
//     elenco.innerHTML += "<div><li class= \"elemento my-2\"><h4>"+aggiunta+"</h4>"+pulsanteX+"</li></div>";

//  })

// //  aggiungi un contatore ai bottoni degli elementi li per riconoscerli con la doppia classe per poi poter capire quale eliminare ....... NO...

let controllaSePalindroma = prompt("Inserisci una parola da controllare se palindroma");

console.log(palindroma(controllaSePalindroma));

// ----------------------------- FUNZIONI-------------------------------

// abituto con java stavo impzzendo con charAt ma let si puo usare come un array di caratteri
function palindroma (stringa){
   for (let i = 0; i < stringa.length/2; i++) {

      console.log(stringa[i]+":"+stringa[stringa.length - 1 - i])

      if (stringa[i] !== stringa[stringa.length - 1 - i]) { 
         return false;
      }

   }
   return true;
}