
// function to generate random number

var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max-min+1)) + min;

  return value;
};


//function startGame

var startGame = function() {

  
  
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = randomNumber(40,60);
      playerHealth = randomNumber(40,60);
      enemyAttack = randomNumber(10,20);
      playerAttack = randomNumber(10,20);
    
      console.log("Enemy Health:" + enemyHealth,"Jili Health:"+ playerHealth,"Enenmy Attack:"+ enemyAttack, "Jili Attack:" + playerAttack);
      
      fight(pickedEnemyName);

      if (playerHealth > 0 && i <enemyNames.length-1) {
        storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
        shop();
        console.log('enter the shop');} 
        else {
          window.alert(playerName + ' has chosen not to shop.')
        }
      }

    }
    else {
      window.alert("Your robot is dead! Game Over!")
    }
  }

  endGame();

  rePlay= window.confirm('do you want to play again?')
  if (rePlay) {startGame()}
  else {
    window.alert(playerName + ' : Thank you for Playing! See you soon!')
  }

};

//function shop()

var shop=function(){
  shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch (shopOptionPrompt) {
      
        case "refill":
        case "REFILL":

          if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        
            // increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
        
          break;
      
        case "upgrade":
        case "UPGRADE":

          if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        
           // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
        
          break;
      
        case "leave":
        case "LEAVE":

        window.alert("Leaving the store.");
    
        // do nothing, so function will end
        break;
      
        default:
        window.alert("You did not pick a valid option. Try again.");
    
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
}


//function fight()

var fight = function(enemyName) {

  while (playerHealth > 0 && enemyHealth > 0) {
    
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "skip" || promptFight === "SKIP") {
      
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    damage= randomNumber(playerAttack-3,playerAttack);
    enemyHealth = Math.max(0,enemyHealth-damage);
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

    damage= randomNumber(enemyAttack-3,enemyAttack);
    playerHealth = Math.max(0,playerHealth-damage);
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

//function endGame()

var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
}


//CALL


var playerName = window.prompt("What is your robot's name?");
console.log(playerName)
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

//var playerHealth=50;
//var playerAttack=10;
//var enemyHealth=50;
//var enemyAttack=10;


var playerHealth=10;
var playerMoney=50;

//var min=40;
//var max=60;

debugger;
startGame()


  