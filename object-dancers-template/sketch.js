/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Kitty(width / 2, height * 3 / 5);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Kitty {
  constructor(startX, startY) {
    this.scl = 0.5
    this.sclchange = 0.0005
    this.move = true
    this.fram = 120
    this.move = 0
    this.angel = 0
    this.speedx = 0.3
    this.speedy = 0.08
    this.lowerbound = 120
    this.upperbound = 120
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    if (this.move <= 8) {
      if (this.angel >= PI) { this.angel = 0 }
      if (this.move == 0) { this.lowerbound = 0 }
      this.angel += PI / (this.upperbound - this.lowerbound)
      //this.y-=sin(this.angel)
      console.log(this.speedx)
      if (this.lowerbound <= frameCount && frameCount <= this.upperbound) {
        this.scl += this.sclchange
        if (this.move % 2 == 0) {
          this.x -= this.speedx
          this.y += this.speedy
        } else {
          this.x += this.speedx
          this.y += this.speedy
        }
      }
      if (frameCount == this.upperbound - 1) {
        this.move += 1
        if (this.move == 5) {
          this.speedy = -this.speedy
          this.sclchange = -this.sclchange
        }
        if (this.move <= 4) {
          this.lowerbound = this.upperbound + 30
          this.upperbound = this.lowerbound + 2 * (this.move + 1) * 30
        } else {
          this.lowerbound = this.upperbound + 30
          this.upperbound = this.lowerbound + 2 * (-this.move + 10) * 30

        }
        console.log(this.lowerbound)
        console.log(this.upperbound)
      }
    }
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    scale(this.scl)

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    //face
    fill(255)
    strokeWeight(0)
    ellipse(0, 0, 160, 150)
    //ears
    push()
    rotate(-PI / 12);
    triangle(-50, -60, 0, -60, -25, -98)
    pop()

    push()
    rotate(PI / 12);
    triangle(50, -60, 0, -60, 25, -98)
    pop()
    //eyes
    noFill()
    stroke(0)
    strokeWeight(3)
    push()
    rotate(PI / 24);
    ellipse(-35, -15, 40, 50)
    fill(0)
    ellipse(-30, -15, 30, 40)

    pop()

    push()
    rotate(-PI / 24);
    ellipse(35, -15, 40, 50)
    ellipse(35, -15, 40, 50)
    fill(0)
    ellipse(30, -15, 30, 40)
    pop()

    //lips
    push()
    arc(0, 10, 20, 20, PI / 4, PI * 3 / 4)
    pop()






    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/