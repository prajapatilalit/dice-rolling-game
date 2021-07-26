//Player1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6 random number
var randomImage1 = "dice" + randomNumber1 + ".png"; // dice1 - dice6
var randomImageSource = "images/" + randomImage1; // images/dice1 - images/dice6
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomImageSource);

//Player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomImage2 = "images/dice" + randomNumber2 + ".png";
var player2 = document.querySelectorAll("img")[1];

player2.setAttribute("src", randomImage2);

//Check Player Win

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Win";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Win 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
