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
  
  var difficulty = prompt("Inserisci il livello di dificcoltà con cui vuoi giocare: facile - medio - difficile")
  

    switch (difficulty){
        case "facile":
        case  "1":
            nSquares = 100;
            break;
    
        case "medio":
        case "2":
            nSquares = 80;
            break;
    
        case "difficile":
        case "3":
            nSquares = 50;
            break;
    } 

    var nBombs = 16;
    var vittoria = nSquares - nBombs;
    

    var arrBombs=[];
    while (arrBombs.length < nBombs) {
        var bomb = randomNumber(1,nSquares);
        if ( inArray(arrBombs,bomb) == false){
            arrBombs.push(bomb)
        }
    }
    
    console.log(arrBombs);
    

    
    xSquare(nSquares);
    
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


