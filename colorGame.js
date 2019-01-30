var colors = [
  "rgb(255, 100, 10)",
  "rgb(150, 255, 0)",
  "rgb(200, 30, 50)",
  "rgb(147, 255, 203)",
  "rgb(0, 0, 155)",
  "rgb(137, 165, 87)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

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
      alert("correct");
    } else {
      alert("wrong");
      // clickedColor = this.style.backgroundColor("#232323");
    }
  });
}
