//1. Create a sketch in which you draw a shape (such as a circle) that diagonally stretches across the canvas from the top-left to the bottom-right and then from the top-right to the bottom-left. Therefore, essentially creating an "X".  Create an array of colors and then use the random function to randomize the color of each shape in the diagonal. Make sure to use at drawing at least 15 shapes.
function setup() {
  createCanvas(400, 400);
  cx = 40 //change in X position
  cy = 40 //change in y position
  colors = ["green","white", "orange", "lightblue"] //color selection
}

function draw() {
  noLoop()
  background(220);
  push()
  for(let i = 0;i < 10; i++){
    chooseColor(colors)
    ellipse(20,20,40)
    translate(cx,cy)
  }
  pop()
  push()
  for(let j = 0; j < 10; j++){
    chooseColor(colors);
    ellipse(380,20,40)
    translate(-cx,cy)   
  }
  pop() //push and pop so that translates do not bleed over.
}
function chooseColor(colors){
   fill(random(colors))
}
