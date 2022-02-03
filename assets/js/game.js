// create a startGame fn that tells the user the state that the game is in
// create a endGame fn that provides final stats on game *** this is for the challenge ***
// create a shop fn between rounds
// 
var randomNumber = function(min, max) {
  // pick a random number between 1 - 60
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  // when used in a fn it will return the value of a varible  
  return value;
};

var fight = function (enemy) {
  console.log(enemy);
  while (playerInfo.health > 0 && enemy.health > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

        playerInfo.money = playerInfo.money - 10;
        console.log("playerInfo.money", playerInfo.money)
        break;
      }
    }

    var damage = randomNumber(enemy.attack - 3, enemy.attack)
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      playerInfo.money = playerInfo.money + 20;

      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    var damage = randomNumber(enemy.attack - 3, enemy.attack)
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");

      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.")
    };
  };
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 17,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 17;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert(playerInfo.name + "'s health was replenished by 20. Shopkeeper collected 7kh")
      this.health += 20;
      this.money -=7;
    } else {
      window.alert("Aht aht! You don't have enough khorr for that!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert(playerInfo.name + "'s attack was increased by 7. Shopkeeper collected 7kh");
      this.attack += 7;
      this.money -= 7;
    } else {
      window.alert("Aht aht! You don't have enough khorr for that!");
    }
  }
};

var enemyInfo = [
  {
    name: "Rui",
    attack: randomNumber(10, 14)
  },
  {
    name: "Akaza",
    attack: randomNumber(10, 14)
  },
  {
    name: "Doma",
    attack: randomNumber(10, 14)
  }
];

var startGame = function () {
  // reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);

      // if we're not at the last enemy in the array AND we're still alive, we can shop
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("This fight is over, visit the store before the next round?");
        // if yes, take them to the stop
        if (storeConfirm) {
          shop();
        };
      };
    } else { // if player is not alive, break out of the loop and let the endGame run
      window.alert("You have lost the battle! Game over!");
      break;
    };
  };
  endGame();
};

// function to end the game
var endGame = function () {
  window.alert("The game is over and the results are in!");
  if (playerInfo.health > 0) {
    window.alert("Great job on surviving the tournament! You now have a score of " + playerInfo.money + ".");
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

var shop = function () {
  var shopOptionPrompt = window.prompt(playerInfo.name + ", would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a selection.");

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      playerInfo.refillHealth();
      break;

    case "upgrade":
    case "UPGRADE":
      playerInfo.upgradeAttack();
      break;
      
    case "leave":
    case "LEAVE":

      window.alert(playerInfo.name + " has left the shop");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

startGame();