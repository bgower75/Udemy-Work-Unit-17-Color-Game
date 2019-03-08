var game = {}
var colors =  [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var numberOfSquares = 9;

game.init = function() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

//set the game when loading
game.init();

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    //when easy or hard button pressed
    modeButtons[i].addEventListener("click", function () {
      //remove the selection from the mode buttons
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //set the number of squares based on the mode
      this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 9;
      reset();
    });
  }
}

function setUpSquares() {
  // loop through the squares
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function () {
      // grab colour of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare colour to pickedColor
      if (clickedColor === pickedColor) {
        //if correct display message
        messageDisplay.textContent = "Correct!";
        messageDisplay.style.color = "White";
        messageDisplay.style.backgroundColor = "Green";
        //set button text to play another game
        resetButton.textContent = "Play Again?"
        //change all squares to winning colour
        changeColors(clickedColor);
        //change header banner to winning colour
        h1.style.backgroundColor = pickedColor;
      } else {
        //set square to background body colour
        this.style.backgroundColor = "#232323";
        //set message to have another guess
        messageDisplay.textContent = "Try Again";
        messageDisplay.style.color = "White";
        messageDisplay.style.backgroundColor = "Red";
      }
    });
  }
}

function reset() {
  //generate all new colors
  colors = generateRandomColor(numberOfSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //reset the text of the button
  resetButton.textContent = "New Colours";
  //remove the message when new game starts
  messageDisplay.textContent = "";
  //loop through squares and display number and colors
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      //display all 6 squares for hard mode
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      //hide 3 squares for easy mode
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
})

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
