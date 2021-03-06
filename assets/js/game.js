

var randomNumber = function (min, max) {
  // pick a random number between 1 - 60
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  // when used in a fn it will return the value of a varible  
  return value;
};

var fightOrSkip = function () {
  // ask player if they'd like to fight or skip using fn
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

  // if the `promptFight` is NOT a valid value, then execute the following statements
  if (promptFight === "" || promptFight === null) {
    // conditional recursive function call (basically it calls itself again)
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  promptFight = promptFight.toLowerCase();

  if (promptFight === "skip") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from player for skip but do not let them go negative. 
      playerInfo.money = Math.max(0, playerInfo.money - 10);

      // return true if player wants to leave the match
      return true;
      return false;
    }
  }
}

var fight = function (enemy) {
  // track who goes first
  var isPlayerTurn = true;
  // randomly change turn
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
  
  //console.log(enemy);
  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask if they wanna fight or skip
      if (fightOrSkip()) {
        // if true, leave fight by breaking the loop
        break;
      }
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      // remove enemy's health
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        // award player money for the win
        playerInfo.money = playerInfo.money + 20;

        break;

      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }

    } else {

      var damage = randomNumber(enemy.attack - 3, enemy.attack)
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");

        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.")
      }
    }
    // switch turn order for the next round
    isPlayerTurn = !isPlayerTurn;
  }
};

var getPlayerName = function () {
  var name = "";
  while (name === "" || name === null) {
    // reads that anytime the name is entered as an empty string or null, the loop will continue to prompt for a valid name
    name = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + name);
  return name;
}

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 17,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 17;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert(playerInfo.name + "'s health was replenished by 20. Shopkeeper collected 7kh.")
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("Aht aht! You don't have enough khorr for that!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert(playerInfo.name + "'s attack was increased by 7. Shopkeeper collected 7kh.");
      this.attack += 7;
      this.money -= 7;
    } else {
      window.alert("Aht aht! You don't have enough khorr for that!");
    }
  }
};


var enemyInfo = [{
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

  // check local storage for high score, if not present, use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null){
    highScore = 0;
  }

  // if player has more money than the high score, player has new highest score
  if (playerInfo.money > highScore){
    localStorage.setItem("highscore", playerInfo.money);
    localStorage.setItem("name", playerInfo.name);
    alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
  } else {
    // what happens when the player did not get a new high score
    alert(playerInfo.name + " did not beat the highest score of " + highScore + ". Better luck next time!");
  }


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
  var shopOptionPrompt = window.prompt(playerInfo.name + ", would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
  shopOptionPrompt = parseInt(shopOptionPrompt);
  // use switch to carry out action
  debugger;
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;

    case 2:
      playerInfo.upgradeAttack();
      break;

    case 3:
      window.alert(playerInfo.name + " has left the shop");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

startGame();