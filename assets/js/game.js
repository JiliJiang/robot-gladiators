
var startGame = function() {
  debugger;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      playerMoney=10
      
      playerAttack=10
      enemyHealth = 20
      enemyAttack=10

      fight(pickedEnemyName);
    }
    else {
      window.alert("Your robot is dead! Game Over!")
    }
  }

  endGame();

  rePlay= window.confirm('do you want to play again?')
  if (rePlay) {startGame()}
  else {
    window.alert(playerName + ' - Thank you for Playing! See you soon!')
  }

};

var fight = function(enemyName) {

  while (playerHealth > 0 && enemyHealth > 0) {
    
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    
    if (promptFight === "skip" || promptFight === "SKIP") {
      
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      
      playerMoney = playerMoney + 20;

      
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
  
}

var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
}

var playerName = window.prompt("What is your robot's name?");
console.log(playerName)
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var playerHealth=50

debugger;
startGame()


  