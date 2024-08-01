// CCLab Mini Project - 9.R Particle World Template


let snow = [];
let snownum = 30

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < snownum
    ; i++) {
    snow.push(new Snow(random(width), random(height)));

  }

  // // generate particles
  // for (let i = 0; i < snownum; i++) {
  //   snow[i] = new Snow(random(width), random(height));

  // }

}

function draw() {
  background(160, 200, 220);
  fill(244,250,255)
  strokeWeight(0) 
  rect(0,450,800,150)

  // update and display
  for (let i = 0; i < snow.length; i++) {
    snow[i].update()
    snow[i].display()
    if (snow[i].x > 800 || snow[i].y > 600) {
      snow.splice(i, 1)
      deter = random(1)
      if (deter > 0.5) { newx = random(width); newy = random(50) } else { newy = random(height); newx = random(50) }
      snow.push(new Snow(newx, newy))
    }
  }

}

class Snow {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.wide = random(5, 10)
    this.high = random(2, 5)
  }
  // methods (functions): particle's behaviors
  update() {
    this.x += 3
    this.y += 3
  }
  display() {
    // particle's appearance
    push();
    strokeWeight(0)
    translate(this.x, this.y);
    rotate(PI / 3)
    ellipse(0, 0, this.wide, this.high)
    pop();
  }
}
