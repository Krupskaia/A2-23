// Coin Flip
var coinFlip = Math.round(Math.random());
var choice = window.prompt("Would you like heads or tails?");

if (coinFlip < 7) { 
    //Heads if number is less than 7
    if (choice === "heads") {
        window.document.write("The flip was heads and you chose heads...you win!");
    } else {
        window.document.write("The flip was heads and you chose tails...you lose!");
    }
} else { 
    //Tails if number is greater than 7
    if (choice === "heads") {
        window.document.write("The flip was tails and you chose heads...you lose!");
    } else {
        window.document.write("The flip was tails and you chose tails...you win!");
    }
}

