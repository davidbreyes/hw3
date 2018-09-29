function setup() {
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100, 100);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(100, 10), height-10-random(h));
	//x + random(-10, 10) --> x + random (100, 10) makes the blades of grass slanted
  
  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random() > 0.999) { 
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 5;
    //h = 10;
    //in order to make the lawnmower to come by more often, you can change "h" into a smaller number than 10
    //the lawnmower is coming by when h is 5, so the grass is at a pre-determined height
  }

  noStroke();
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
