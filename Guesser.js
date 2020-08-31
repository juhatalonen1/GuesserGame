let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=maxValue=>
Math.floor(Math.random() * Math.floor(maxValue));
//console.log(generateTarget(10))


const alert=()=>{
 window.alert("Number must be 0 - 9");

};

const compareGuesses= ( humanGuess, computerGuess=generateTarget(10), secretTarget=generateTarget(10) )=>{

//kerrotaan pelaajalle jos väärä numero valittu
if (humanGuess<0 || humanGuess>9){
  alert()
}


let humanDifference;
let computerDifference;

//Lasketaan ihmispelaajan ja salaisen numeron ero.



if (secretTarget-humanGuess<=humanGuess-secretTarget){
  humanDifference=Math.abs(secretTarget-humanGuess);
} else  {
  humanDifference=Math.abs(humanGuess-secretTarget);
}
//Lasketaan tietokonepelaajan ja salaisen nmeron ero.
if (secretTarget-computerGuess<=computerGuess-secretTarget){
  computerDifference=Math.abs(secretTarget-computerGuess);
} else  {
  computerDifference=Math.abs(computerGuess-secretTarget);
}

/*
console.log(secretTarget,humanGuess,computerGuess,humanDifference,computerDifference)
*/


//Määritetään voittaja. Verrataan tietokonepelaajan ja ihmispelaajan arvauksen erotusta salaiseen numeroon. Pienempi ero voittaa. Tasatilanteessa ihmispelaaja voitaa.
if (computerDifference<humanDifference){
  console.log("Computer wins")
 return false
}else{
  console.log("Human wins")
  return true
}
};



//Päivitetään pisteet
const updateScore=winner=>{


  if (winner===true){
    humanScore++
  } else{
    computerScore++
  }
  console.log(humanScore, computerScore)
}


//Lisätään erien lukumäärä.
const advanceRound=()=>{
 currentRoundNumber++
 console.log(currentRoundNumber)
 
};


updateScore(compareGuesses(10))
advanceRound()


