//2. Remember the first assignment of creating a grid of squares/circles? Great! Draw that but just draw a grid of shapes, no need to have your initial in the grid. Also, be sure to apply a gradient. Hint: Use nested loops.
//3. Duplicate your previous sketch and modify it to add mouse interactivity. It could be something like changing the gradient based on the mouse's coordinate, changing shape on mouse click, or dropping a random row of icons on top of already present rows.

function setup() {
  createCanvas(440, 440);
  cx = 40 //change in X position
  cy = 40 //change in y position
}

function draw() {
  hue1 = 100
  hue2 = 100
  if(mouseIsPressed === true){
     hue3 = 0
     }
  else hue3 = 255;   //changes from blue/purple to yellow/green depending on if mouse is pressed
  for(let row = 0; row < 10; row++){
    for(let column = 0; column < 10; column++){
      fill(hue1, hue2, hue3)
      ellipse(cx + 40 * row,cy + 40 * column,40)
      hue1 = hue1 + 0.005 * mouseX   //hue changes intensity based on mouseY
      hue2 = hue2 + 0.005 * mouseY   //hue changes intensity based on mouseX
    }
  }
}
