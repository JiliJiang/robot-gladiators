
// function to generate random number

var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max-min+1)) + min;

  return value;
};

//generate random numbers

var player = {
  name:window.prompt("What is your player's name?"),
  health:randomNumber(40,60),
  attack:randomNumber(10,20),
}

var playerMoney=50;

var enemy = [
  {
    name: "Roborto",
    health:randomNumber(40,60),
    attack:randomNumber(10,20),
  },
  {
    name: "Amy Android",
    health:randomNumber(40,60),
    attack:randomNumber(10,20),
  },
  {
    name: "Robo Trumble",
    health:randomNumber(40,60),
    attack:randomNumber(10,20),
  }
];

console.log(player)
console.log(enemy)




//function startGame

var startGame = function() {

  
  
  for (var i = 0; i < enemy.length; i++) {
    if (player.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      //enemy.health = randomNumber(40,60);
      //player.health = randomNumber(40,60);
      //enemy.attack = randomNumber(10,20);
      //player.attack = randomNumber(10,20);
    
           
      fight(enemy[i]);                               
                                                                                                                                      
      if (player.health > 0 && i <enemy.length-1) {
        storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
        shop();
        console.log(player.name+'enters the shop');} 
        else {
          window.alert(player.name + ' has chosen not to shop.')
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
    window.alert(player.name + ' : Thank you for Playing! See you soon!')
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
            player.health = player.health + 20;
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
            player.attack = player.attack + 6;
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

var fight = function(enemy) {

  while (player.health > 0 && enemy.health > 0) {
    
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "skip" || promptFight === "SKIP") {
      
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      
      if (confirmSkip) {
        window.alert(player.name + ' has decided to skip this fight. Goodbye!');
        
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    damage= randomNumber(player.attack-3,player.attack);
    enemy.health = Math.max(0,enemy.health-damage);
    console.log(
      player.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      
      playerMoney = playerMoney + 20;

      
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    damage= randomNumber(enemy.attack-3,enemy.attack);
    player.health = Math.max(0,player.health-damage);
    console.log(
      enemy.name + ' attacked ' + player.name + '. ' + player.name + ' now has ' + player.health + ' health remaining.'
    );

    
    if (player.health <= 0) {
      window.alert(player.name + ' has died!');
      
      break;
    } else {
      window.alert(player.name + ' still has ' + player.health + ' health left.');
    }
  }
  
}

//function endGame()

var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");
  if (player.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
}


//CALL

debugger;
startGame()


//var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//var playerHealth=50;
//var playerAttack=10;
//var enemyHealth=50;
//var enemyAttack=10;
//var min=40;
//var max=60;




  