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
      // if we're not at the last enemy in the array AND we're still alive, we can shop
      if(playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("This fight is over, visit the store before the next round?");
        // if yes, take them to the stop
        if (storeConfirm) {
        shop();
      }

    } else {
      endGame();
    }
  };
};

// function to end the game
var endGame = function() {
  debugger;
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

var shop = function() {
  var = shopOptionPrompt = window.prompt(playerName + ", would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a selection.");

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":

      if (playerMoney >= 7) {
      window.alert(playerName + "'s health was replenished by 20. Shopkeeper collected 7murr");
      // increase playerHealth and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      } else {
        window.alert("Aht aht! You don't have enough murr for that!")
      }
      break;

    case "upgrade":
    case "UPGRADE":
      if (playerMoney >= 7) {
      window.alert(playerName + "'s attack was increased by 7. Shopkeeper collected 7murr");
      // increase playerHealth and decrease money
      playerAttack = playerAttack + 7;
      playerMoney = playerMoney - 7;
      } else {
        window.alert("Aht aht! You don't have enough murr for that!")
      }
      break;
    case "leave":
    case "LEAVE":
      
      window.alert(playerName + " has left the shop");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

startGame();