var wordList = ["supernova", "quasar","earth","mars","venus","mercury","jupiter","saturn","uranus",
"neptune","pluto", "sirius","milkyway","galaxy","star","meteor","asteroid", "moon", "nebula","andromeda"];
var alphabetList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
"s", "t", "u", "v", "w", "x", "y", "z"]
var displayArray = [];
var wrongGuessArray = [];
var currentWord = document.getElementById("currentWord")
var remainingGuesses = document.getElementById("remainingGuesses")
var winCount = document.getElementById("winCount")
var wrongLetters = document.getElementById("wrongLetters")
var totalWins = 0;
var maxGuesses = 10;
var guesses = 0;
var word;
var gameOver = false; 

//pick a word from the array at a random index
function pickWord(){
    random = Math.floor(Math.random() * wordList.length);
    word = wordList[random];
}
//display underscores onscreen based on length of the word
function showBlank() {
    for (i = 0; i < word.length; i++) {
        displayArray[i] = "_";
    }
    currentWord.innerHTML = displayArray.join(" ");
}

//setup game screen
function setupGame() {
    document.getElementById("giphy-embed").src = "";
    guesses = maxGuesses;
    wrongGuessArray = [];
    displayArray = [];
    pickWord()
    showBlank()
    currentWord.innerHTML = displayArray.join(" ");
    remainingGuesses.innerHTML = guesses;
    winCount.innerHTML = totalWins;
    wrongLetters.innerHTML = wrongGuessArray;
}

//check if the key pressed is a letter
function isLetter(letter)  {
    for(i=0; i<alphabetList.length; i++){
        if (alphabetList[i].toString().toUpperCase() == letter.toString().toUpperCase()) {
            isGuessed(letter)
        }
    }   
}  

//check if the key pressed has already been guessed
function isGuessed(letter){
    if (wrongGuessArray.length >0){
        if(wrongGuessArray.includes(letter)){
            console.log("already guessed")
        }
        else{
            isWord(letter);
        }
    }
    else{
        isWord(letter);
    } 
}

//check if key pressed is correct or not
function isWord(letter) {
    var correctGuess = false;
    for (var i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() == letter) {

            displayArray[i] = letter;
            correctGuess = true;
            //edit here
            var audio = new Audio('correctAnswer.mp3');
            audio.play();
        }
    }
    if (!correctGuess) {
        //edit here
        var audio = new Audio('wrongAnswer.mp3');
        audio.play();
        wrongGuessArray.push(letter);
        guesses--
    }
    currentWord.innerHTML = displayArray.join("  ");
    remainingGuesses.innerHTML = guesses;
    winCount.innerHTML = totalWins;
    wrongLetters.innerHTML = wrongGuessArray;
}

//updates screen each keystroke and checks for wins
function roundComplete() {
    if (word.split("").toString().toUpperCase() == displayArray.toString()) {
        gameOver = true; 
        var audio = new Audio('winRound.mp3');
        audio.play();
        //edit here
        totalWins++;
        winCount.innerHTML = totalWins;
        //play winning sound or image
        setupGame();
        document.getElementById("giphy-embed").src = "assets/images/winner.gif";
        
    }//edit here
    else if (guesses === 0) {
        var audio = new Audio('loseRound.mp3');
        audio.play();
        //play losing sound or image
        gameOver = true; 
        setupGame();
        document.getElementById("giphy-embed").src = "assets/images/lose.gif";
        
    }
}

//starts the game
setupGame();

//event listener
document.onkeypress = function (event) {
    if (gameOver) {
        setupGame();
        gameOver = false;
    } else {
    var letterGuess = String.fromCharCode(event.keyCode).toUpperCase();
    isLetter(letterGuess); 
    roundComplete();
}
}
