var colors =  generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColor(6);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
})

// set the rgb code for the banner to be displayed in the heading
colorDisplay.textContent = pickedColor;

// loop through the squares
for(var i = 0; i < squares.length; i++) {
  // assign a color to the squares
  squares[i].style.background = colors[i];
  // add click listeners to squares
  squares[i].addEventListener("click", function() {
    // grab colour of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare colour to pickedColor
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  //change each color to match given color
}

function pickColor() {
  //pick random number, math.floor makes it a whole number
  var random = Math.floor(Math.random() * colors.length); //then multiply it my the number in the array
  return colors[random];
}

function generateRandomColor(num) {
  //make an array
  var arr = []
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
