let cow1; // global cow instance
let cowIMG;

let animals = [];
let numAnimals = 5;

let chickenIMG

function preload() {
    cowIMG = loadImage("assets/cow-poster.png");
    chickenIMG = loadImage("assets/chicken_480.png"
    )
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas-parent");

    // cow1 = new Cow(300, 200, cowIMG); // instantiate cow object
    // console.log(cow1)

    // MAKE INITIAL COWS and put the into the cows array
    for (let i = 0; i < numAnimals; i++) {
        let ranX = random(100, width - 50);
        let ranY = random(50, height / 2)
        if (random() < 0.5) {
            let oneCow = new Animal(ranX, ranY, cowIMG, "cow");
            animals.push(oneCow)
        } else {

            let oneChicken = new Animal(ranX, ranY, chickenIMG, "chicken");
            animals.push(oneChicken)
        }
        // let oneCow = new Animal(ranX, ranY, cowIMG,"cow"); 
        // let oneChicken = new Animal(ranX, ranY, chickenIMG,"chicken"); 


    }
    console.log(animals)
}

function draw() {
    background(220, 50, 120);
    // cow1.display(); // display the cow
    // cow1.update(); // update the cow

    // DO STUFF FOR EACH COW --> loop over the cows array
    for (let i = 0; i < animals.length; i++) {
        animals[i].display();
        animals[i].update();
    }


    line(0, height / 2, width, height / 2);
    line(width / 2, height / 2, width / 2, height);

}

class Animal {
    constructor(startX, startY, cowimg, myType) {
        this.x = startX;
        this.y = startY;
        this.photo = cowimg;
        this.scaleFactor = random(0.4, 0.5);

        this.xSpeed = 1;
        this.ySpeed = 1;

        this.type = myType
        this.isDragged = false
    }
    update() {
        if (this.isDragged == true) {
            this.x = mouseX
            this.y = mouseY
        }
        if(this.x<width/2&&this.y>height/2)

    }
    display() {
        push();
        translate(this.x, this.y);
        scale(this.scaleFactor);


        // if (this.isDragged == true) { fill("red") }
        // rect(-150, -280, 300, 300);
        // we reposition the img to 
        // better fit this object's origin point (this.x, this.y)
        let imgW = this.photo.width;
        let imgH = this.photo.height;
        //       the img      x        y 
        image(this.photo, -imgW / 2, -imgH + 90);
        fill("blue");
        circle(0, 0, 5);

        pop();
    }
    checkIfPressed() {
        if (mouseX > this.x - (150 * this.scaleFactor) &&
            mouseX < this.x + (150 * this.scaleFactor) &&
            mouseY > this.y - (280 * this.scaleFactor) &&
            mouseY < this.y + (20 * this.scaleFactor)) {
            this.isDragged = true
        }
    }

}
function mousePressed() {
    for (let i = 0; i < animals.length; i++) {
        animals[i].checkIfPressed()
    }

}
function mouseReleased() {
    for (let i = 0; i < animals.length; i++) {
        animals[i].isDragged = false
    }

}