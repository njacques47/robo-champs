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
  while (playerHealth > 0 && enemyHealth > 0) {
    // alert players that they are starting the round

    // fight or skip 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if true, leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");

        // subtract money from playerMoney
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amt set in the playerAttack
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // check enemyHealth
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award money for winning
      playerMoney = playerMoney + 20;

      // leave the while loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

      //remove playerHealth
      playerHealth = playerHealth - enemyAttack;
      console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

      // check playerHealth
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");

        // leave while loop if player is dead
        break;
      } else {
      window.alert(playerName + " still has " + playerHealth + " health remaining.")
    };
  };
};

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  //call fight fn w/ enemy-robot
  fight(pickedEnemyName);
};

