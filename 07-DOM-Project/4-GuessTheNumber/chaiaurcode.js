let randomNumber = Math.floor(Math.random() * 100 +1);
// console.log(randomNumber);

let submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");

let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");

let lowOrHigh = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault(); // this will stop the values here.
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    // validate value are between 1 and 100 and it's NaN
    if (isNaN(guess)) {
        alert("Please Enter a valid Number");
    } else if ( guess < 1){
        alert("Please Enter a Number Greather than 0");

    }else if (guess > 100) {
        alert("Please Enter a Number less than 101");

    } else if (guess == '') {
        alert("Please Enter a Number");

    }else{
        prevGuess.push(guess);
        if(numGuesses === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // High or Low
    if(guess == randomNumber){
        displayMessage("You guessed it right!");
        endGame();
    }else if(guess < randomNumber) {
        displayMessage("Number is too low!");
    }else if (guess > randomNumber) {
        displayMessage("Number is too High!");
    }

}

function displayGuess(guess) {
    // clean value guess update 
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuesses++;
    remaining.innerHTML = `${11-numGuesses}`
}


function displayMessage(message) {
    // we pass a message and print
    lowOrHigh.innerHTML = `<h2>${message}<h2>`;
}

function endGame() {
    // end game
    userInput.value =  '';
    userInput.setAttribute('disabled', '');
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame() {
    // start new game

    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener("click", (e) => {
        randomNumber = Math.floor(Math.random() * 100 +1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    });
}






