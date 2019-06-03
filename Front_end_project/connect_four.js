var p1 = prompt('Enter the player1 name, ans you will be blue.');
var p2 = prompt('Enter the player2 name, and you will be red. ');
var button  = document.querySelectorAll("button");

console.log(button.length);
var turn = document.querySelector("#whosTurn");
turn.textContent = p1+ ", your turn.";
