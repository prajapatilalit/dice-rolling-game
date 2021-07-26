var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6 random number
var randomImage = "dice" + randomNumber1 + ".png"; // dice1 - dice6
var randomImageSource = "images/" + randomImage; // images/dice1 - images/dice6
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
