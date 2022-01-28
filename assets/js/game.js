// Game States
// WIN - player robot has defeated all enemy-robots
//  * fight all enemy-robots
//  * defeat each enemy robot
// LOSE - player robot's health is zero or less

var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 17;
var playerMoney = 10;


var enemyNames = ["Gir", "Android 19", "Bender"];
var enemyHealth = 50;
var enemyAttack = 12;


// this is an example of a function expression where a function is created by assigned it to a variable then later executed. 
var fight = function (enemyName) {
    //repeat and execute this entire block as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
    // alert players that they are starting the round

    // fight or skip 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
      // if player choses to skip then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight! Goodbye.");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break; // this gets positioned at the bottom of the conditional statement to ensure the break (stopping point) occurs at the right time
      }
      // if no (false), ask questiion again by running fight() again
      else {
        fight();
      }

    };
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  //call fight fn w/ enemy-robot
  fight(pickedEnemyName);
};

