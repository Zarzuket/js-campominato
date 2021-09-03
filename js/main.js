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

//   Funzione se elemento è dentro l'array
function inArray(arr,element){
    var count=0;
    while ( count < arr.length) {
        if (arr[count] == element){
            return true;
        }
        count++;
    }
    return false;
}


  
  // PROGRAMMA PRINCIPALE
  
  var squareUtente = parseInt(prompt("inserisci un numero da 1 a 100 per creare un campo di quadrati."));
  
  while(isNaN(squareUtente)){
      squareUtente = parseInt(prompt("devi inseririre un numero da 1 a 100!!"));
    }
    
    var nBombs = 1;
    var nSquares = squareUtente;
    var vittoria = nSquares - nBombs;
    

    var arrBombs=[];
    while (arrBombs.length < nBombs) {
        var bomb = randomNumber(1,100);
        if ( inArray(arrBombs,bomb) == false){
            arrBombs.push(bomb)
        }
    }
    
    console.log(arrBombs);
    

    
    xSquare(squareUtente);
    
    var squareClicked = [];
    
document.getElementById("campo").addEventListener("click" ,
    function(event){
        var quadrato = parseInt(event.target.innerHTML);
        event.target.classList.add("red" , "clicked"); 
        if (arrBombs.includes(quadrato) === true){
            alert("hai perso")
        }       
        else if (squareClicked.includes(quadrato)){
            alert("casella già cliccata");
        } else  {
            squareClicked.push(quadrato);
            if(squareClicked.length == vittoria){
                alert("hai vinto");
            }
        }   console.log(squareClicked)
  }
)


switch (choiche){
    case "easy":
    case  "1":
        text = ""
    break;

    case "medium":
    case "2":
        text= ""
    break;

    case "hard":
    case "3":
        text = ""
    break;
} 