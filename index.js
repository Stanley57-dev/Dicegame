// Function to update player names
function updateNames() {
  let player1Input = document.getElementById("player1Name").value.trim();
  let player2Input = document.getElementById("player2Name").value.trim();

  if (player1Input) {
    document.getElementById("player1Label").innerText = player1Input;
  }
  if (player2Input) {
    document.getElementById("player2Label").innerText = player2Input;
}
}

function rollDice() {
 
let player1Name = document.getElementById("player1Label").innerText || "Player 1";
  let player2Name = document.getElementById("player2Label").innerText || "Player 2";

  // Generate random dice rolls
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");   
   

  if (randomNumber1 > randomNumber2) {
  document.getElementById("resultBox").innerText = player1Name +" " +  "won🚩"
  }
  else if (randomNumber1 < randomNumber2) {
  document.getElementById("resultBox").innerText = player2Name + " " +   "won🚩" 
  }
  else {
     document.getElementById("resultBox").innerText = "draw🚧 "
  }
}


