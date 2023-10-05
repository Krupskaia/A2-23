// The “Grade Assigner” Application

var number = parseInt(window.prompt("Enter enter a number between 1 to 100"), 10);

if  (number >= 1 && number <= 100) {
    switch (number) {
        case (number >= 90 && number <= 100): {
            window.console.log("You received a A");
            break;
        }
        case (number >= 80 && number <= 89): {
            window.console.log("You received a B");
            break;
        }
        case (number >= 70 && number <= 79 ): {
            window.console.log("You received a C");
            break;
        }
        case (number >= 60 && number <= 69 ): {
            window.console.log("You received a D");
            break;
        }
        default: {
            window.console.log("You received a F");
        } 
    }
}
else { 
    window.console.log("Please enter a number between 1 to 100");
}