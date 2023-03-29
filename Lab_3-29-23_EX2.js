//2. Remember the first assignment of creating a grid of squares/circles? Great! Draw that but just draw a grid of shapes, no need to have your initial in the grid. Also, be sure to apply a gradient. Hint: Use nested loops.
function setup() {
  createCanvas(440, 440);
  cx = 40 //change in X position
  cy = 40 //change in y position
}

function draw() {
  hue1 = 100
  hue2 = 100
  for(let row = 0; row < 10; row++){
    for(let column = 0; column < 10; column++){
      fill(hue1, hue2, 255)
      ellipse(cx + 40 * row,cy + 40 * column,40)
      hue1 = hue1 + 1
      hue2 = hue2 + 1
    }
  }
}
