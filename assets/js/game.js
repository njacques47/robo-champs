// this created a window prompt for the user to create a name for their player
// the addition of var playerName creates a useable variable that can be stored
var playerName = window.prompt("What is your robot's name?");
    // note the lack of quotation marks around playerName
    console.log(playerName);
    console.log("this logs a string, good for leaving yourself a message");
    console.log("10 + 10"); //this will do math and log 20
    console.log("Our robot's name is " + playerName); //this will do create a string and attach the variable input to it [also called concatenation]


// this creates a function named, "fight" [aka the function was declared]
function fight() {
    // this creates a alert box to inform the user that the fight has begun
    window.alert("The fight has begun!");
}

// this "calls" the function that we declared
//fight();