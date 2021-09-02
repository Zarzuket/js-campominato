// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.

// FUNZIONI

// Funzione genera campo
function xSquare(square){
    for( var i=1; i<=square; i++){

        document.getElementById("campo").innerHTML += `<div class="quadrato">${i}</div>`
    }
}

// Funzione genera bombe

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }





// PROGRAMMA PRINCIPALE

var squareUtente = parseInt(prompt("inserisci un numero da 1 a 100 per creare un campo di quadrati."));

while(isNaN(squareUtente)){
    squareUtente = parseInt(prompt("devi inseririre un numero da 1 a 100!!"));
}


xSquare(squareUtente);


document.getElementById("campo").addEventListener("click" ,
    function(event){
        event.target.classList.add("red" , "clicked");
        alert(event.target.innerHTML)
    }
)

var arrBombs = [];

while (arrBombs.length < 16) {
    var bomb = arrBombs.push(randomNumber(1,100));
    if (arrBombs.includes(bomb) == false){
        arrBombs.push(bomb);
    }
}

console.log(arrBombs);

var squareClicked = [];



// var arrBombs = [];

// for (i=0 ; i<16; i ++) {
    
//     arrBombs.push(randomNumber(1,100));
// }

// console.log(arrBombs)