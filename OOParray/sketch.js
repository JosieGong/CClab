let cows = []
let newCows = 20
function preload() {
    cowIMG = loadImage("assets/cow-poster.png")

}
function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas-parent")

    cow = new Cow(100, 200, cowIMG)
    for (let i = 0; i < newCows; i++) {
        let oneCow = new Cow(random(width), random(height), cowIM)
        cows.push(oneCow)
    }
}

function draw() {
    background(210, 230, 200)

    for (let i=0;i<cows.length;i++){
        cows[i].display()
        cows[i].update()
    }
}

class Cow {
    constructor(startX, startY, img) {
        this.x = startX
        this.y = startY
        this.photo = img
        this.s = random(0.4, 0.5)
        this.xSpeed = 1
        this.ySpeed = 1
    }
    update() {
        this.x += this.xSpeed
        this.y += this.ySpeed
        if (this.x > width) { this.x = 0 }
        if (this.y > height) { this.y = 0 }
    }

    display() {
        push();
        translate(this.x, this.y)
        scale(this.s)
        let imgW = this.photo.width;
        let imgH = this.photo.height;
        image(this.photo, -imgW / 2, -imgH + 90)
        fill("blue")
        circle(0, 0, 5)
        pop()

    }

}