// create a startGame fn that tells the user the state that the game is in
// create a endGame fn that provides final stats on game *** this is for the challenge ***
// create a shop fn between rounds
// 

var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 17;
var playerMoney = 10;


var enemyNames = ["Gir", "Android 19", "Bender"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");

        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      playerMoney = playerMoney + 20;

      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");

      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health remaining.")
    };
  };
};

var startGame = function () {
  debugger;
  // reset player stats
  playerHealth = 100;
  playerAttack = 17;
  playerMoney = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);

    } else {
      endGame();
    }
  };
};

// function to end the game
var endGame = function() {
  window.alert("The game is over and the results are in!");
  if (playerHealth > 0) {
    window.alert("Great job on surviving the tournament! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  };

  // ask the player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

startGame();