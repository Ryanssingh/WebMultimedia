

//list of possible words to choose from
var POSSIBLE_WORDS = ["obdurate","verisimilitude","obsequious","toady","dissonant","idempotent","hi"];
var guesses = [];
var word ="";
var MAX_GUESSES = 6;
var guessCount = MAX_GUESSES;
var clue = document.getElementById('clue');
function newGame(){
  //choos a random index and pic a word
  var randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  guessCount = MAX_GUESSES;
  guesses = "";
  updatePage();
}
function guessLetter(){
  var input = document.getElementById("guess");
  var letter = input.value;
  if (guessCount==0 || document.getElementById("clue").innerHTML.indexOf("_")<0|| guesses.indexOf(letter)>=0){
    updatePage();
    return;
  }
  input = "";
  guess += letter;
  if(word.indexOf(letter)<0){
    guessCount--;

  }
  guesses+=letter;
  updatePage();
}
function updatePage() {
  var clueString = "";
  for (var i = 0; i < word.length; i++) {
    var letter = word.charAt(i);
    if(guesses.indexOf(letter)>=0){
      clueString+=letter+" ";
    }
    else{
      clueString +="_ ";
    }
    document.getElementById("guess").value ="";
  }
  var clue =document.getElementById("clue");
  clue.innerHTML = clueString;
  var guessArea = document.getElementById('Guesses');
  guessArea.innerHTML="Guesses: " +guesses
  var pic = document.getElementById('hangmanpic');
  pic.src="Images/hangman"+guessCount+".gif";
  if(guessCount==0) {
    guessArea.innerHTML="You Lose";
  }
  if(document.getElementById("clue").innerHTML.indexOf("_")<0){
    guessArea.innerHTML="You Win"
  }
}
