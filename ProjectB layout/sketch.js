// select html element using its ID:

// let text2 = document.getElementById("text2");
let time1
let time2
let time3
let time4

let mainwindow = true
let washwindow = false
let chiliwindow = false
let taskwindow = false

let fullvision
let washclothes

let washclothesstep = 0
let waterstep = 0
let water1
let water2
let water3
let waterfull
let scoop
let scoop1
let scoop2
let scoop3
let scoop4
let scoopx = 350
let scoopy = 725

let clothes
let clothes1
let clothes1after
let clothes2
let clothes2after
let clothes3
let clothes3after
let clothesstep = 0
let tshirt
let pants
let skirt
let disx = 0
let disy = 0

let stick
let astick
let stickstep = 0
// chnge a css attriute of this element


function preload() {
    fullvision = loadImage("assets/全景.png")
    washclothes = loadImage("assets/洗衣.png")
    water1 = loadImage("assets/水1:3.png")
    water2 = loadImage("assets/水2:3.png")
    water3 = loadImage("assets/水1.png")
    clothes1 = loadImage("assets/衣服2:3.png")
    clothes1after = loadImage("assets/衣服2:3放置后.png")
    clothes2 = loadImage("assets/衣服1:3.png")
    clothes2after = loadImage("assets/衣服1:3放置后.png")
    clothes3 = loadImage("assets/衣服0.png")
    clothes3after = loadImage("assets/衣服0放置后.png")
    stick = loadImage("assets/棒.png")
    scoop1 = loadImage("assets/平勺.png")
    scoop2 = loadImage("assets/半水勺.png")
    scoop3 = loadImage("assets/全水勺.png")
    scoop4 = loadImage("assets/无水侧勺.png")
    tshirt = loadImage("assets/衣服.png")
    pants = loadImage("assets/裤子.png")
    skirt = loadImage("assets/裙子.png")
}

function setup() {
    let cnv = createCanvas(1366, 1024);
    cnv.parent("canvas-parent")
    scoop = new Scoop(scoopx, scoopy, scoop1, scoop2, scoop3, scoop4)
    clothes = new Clothes(150, 600, tshirt, pants, skirt)
    astick = new Stick(50, 850, stick)
    // noCanvas()
}

function draw() {
    background(210, 230, 200)
    if (mainwindow == true) {
        mainWindow()
    }
    if (washwindow == true) {
        washWindow()
    }


    // if(frameCount > 0){
    //     text2.style.opacity = frameCount/200;
    // }



    time()
    timeDisplay()
    returnButton()
}


function mainWindow() {
    image(fullvision, 0, 0, 1366, 1024);
    strokeWeight(0)
    fill(255)
    rect(600, 800, 30, 30)
    fill(160, 180, 160)
    textSize(20)
    text("1", 610, 823)


}

function washWindow() {
    if (washclothesstep == 0) {
        if (waterstep < 3) {
            image(washclothes, 0, 0, 1366, 1024
            );
        } else if (3 <= waterstep && waterstep < 7) {
            image(water1, 0, 0, 1366, 1024)
        } else if (7 <= waterstep && waterstep < 11) {
            image(water2, 0, 0, 1366, 1024)
        } else if (11 <= waterstep && waterstep < 12) {
            image(water3, 0, 0, 1366, 1024)
        } else if (12 <= waterstep) { washclothesstep = 1 }

        fill(255)
        text("drag the scoop to the river, and click it to get some water. ", 340, 70)
        text("Then drag it back to the basin to pour the water out.", 380, 130)
        //get water
        scoop.display()
        scoop.update()
        // rect(730/2, 1560/2, 160/2, 100/2)
        // rect(445, 735, 200, 125)

        image(stick, 50, 850, 420, 109)
    } else if (washclothesstep == 1) {
        if (clothesstep == 0) {
            image(water3, 0, 0, 1366, 1024)
        } else if (clothesstep == 1) {
            image(clothes1, 0, 0, 1366, 1024)
        } else if (clothesstep == 2) {
            clothes.x = 150
            clothes.y = 600
            image(clothes1after, 0, 0, 1366, 1024)
        } else if (clothesstep == 3) {
            image(clothes2, 0, 0, 1366, 1024)
        } else if (clothesstep == 4) {
            clothes.x = 150
            clothes.y = 600
            image(clothes2after, 0, 0, 1366, 1024)
        } else if (clothesstep == 5) {
            image(clothes3, 0, 0, 1366, 1024)
        } else if (clothesstep == 6) {
            image(clothes3after, 0, 0, 1366, 1024)
            washclothesstep = 2
        }
        image(stick, 50, 850, 420, 109)
        image(scoop1, scoopx, scoopy, 290, 140)
        clothes.display()
        clothes.update()
    } else if (washclothesstep == 2) {
        if (stickstep == 0) {
            image(clothes3after, 0, 0, 1366, 1024)
            if (astick.time >= 3) {
                stickstep = 1
                astick.time = 0
            }
            astick.display()
            astick.update()
        } else if (stickstep == 1) {
            image(clothes3after, 0, 0, 1366, 1024)
            image(stick, 50, 850, 420, 109)
        } else if (stickstep == 2) {
            clothesstep = 5
            image(clothes3, 0, 0, 1366, 1024)
            clothes.display()
            clothes.update()
            image(stick, 50, 850, 420, 109)

        } else if (stickstep == 3) {           
             image(clothes2after, 0, 0, 1366, 1024)
            if (astick.time >= 3) {
                stickstep = 1
            }
            astick.display()
            astick.update()}
        image(scoop1, scoopx, scoopy, 290, 140)
    }


}


function taskWindow() { }

class Stick {
    constructor(x, y, img) {
        this.img = img
        this.x = x
        this.y = y
        this.x2 = x
        this.y2 = y
        this.isDragged = false
        this.isStriking = false
        this.angel = 0
        this.change = -0.03
        this.step = 0
        this.time = 0
    }
    update() {
        if (this.isDragged == true) {
            this.x = mouseX + disx
            this.y = mouseY + disy
        }
    }
    display() {
        push()
        translate(this.x, this.y)
        if (this.isStriking == true) {
            rotate(this.angel)
            this.angel += this.change
            this.step += 0.03
            if (this.angel <= -0.9) {
                this.change = -this.change
            }
            else if (this.angel >= 0.3) {
                this.change = -this.change
            }
            if (this.step >= 2.4) {
                this.isStriking = false
                this.step = 0
                //control the strike time to be 3 when trigger next step
                this.time += 1
            }
        }
        image(this.img, 0, 0, 420, 105)
        pop()
    }

    checkIsPressed() {
        if (this.x + 40 <= mouseX &&
            mouseX <= this.x + 480 &&
            this.y + 50 <= mouseY &&
            mouseY <= this.y + 800) {
            this.isDragged = true
            if (disx == 0 && disy == 0) {
                disx = this.x - mouseX
                disy = this.y - mouseY

            }
        }
    }
}

class Clothes {
    constructor(x, y, image1, image2, image3) {
        this.x = x
        this.y = y
        this.img1 = image1
        this.img2 = image2
        this.img3 = image3
    }
    update() {
        if (this.isDragged == true) {
            // if(clothesstep<=2){
            console.log(1)
            this.x = mouseX - 120
            this.y = mouseY - 150
        }
        // else if (clothesstep=3){            
        //     this.x = mouseX - 120
        //     this.y = mouseY - 150}
        // }
    }
    display() {
        push()
        translate(this.x, this.y)
        if (clothesstep == 1) {
            image(this.img1, 0, 0, 265, 340)
        } else if (clothesstep == 3) {
            image(this.img2, 0, 0, 230, 230)
        } else if (clothesstep == 5) {
            image(this.img3, 0, 0, 265, 360)
        }
        pop()
    }

    checkIsPressed() {
        if (this.x - 50 <= mouseX &&
            mouseX <= this.x + 250 &&
            this.y - 50 <= mouseY &&
            mouseY <= this.y + 340) {
            this.isDragged = true
        }
    }

}
class Scoop {
    constructor(x, y, image1, image2, image3, image4) {
        this.img1 = image1
        this.img2 = image2
        this.img3 = image3
        this.img4 = image4
        this.x = x
        this.y = y
        this.x2 = x
        this.y2 = y
        this.isDragged = false


    }
    update() {
        if (this.isDragged == true) {
            this.x = mouseX + disx
            this.y = mouseY + disy
        }


    }
    display() {
        push()
        translate(this.x, this.y)
        if (waterstep == 0 || waterstep == 4 || waterstep == 8) {
            image(this.img1, 0, 0, 290, 140)
        } else if (waterstep == 1 || waterstep == 5 || waterstep == 9) {
            image(this.img2, 0, 0, 260, 230)
        } else if (waterstep == 2 || waterstep == 6 || waterstep == 10) { image(this.img3, 0, 0, 290, 140) }
        else if (waterstep == 3 || waterstep == 7 || waterstep == 11) { image(this.img4, 0, 0, 260, 230) }
        pop()
    }

    checkIsPressed() {
        // if (waterstep == 1) {
        if ((this.x + 15 <= mouseX &&
            mouseX <= this.x + 95 &&
            this.y + 55 <= mouseY &&
            mouseY <= this.y + 105) ||
            (this.x + 95 <= mouseX &&
                mouseX <= this.x + 295 &&
                this.y + 10 <= mouseY &&
                mouseY <= this.y + 135)) {
            this.isDragged = true
            if (disx == 0 && disy == 0) {
                disx = this.x - mouseX
                disy = this.y - mouseY

            }
        }
        // } else if (waterstep == 2)
    }
}

function mousePressed() {
    if (washwindow == true) {
        if (washclothesstep == 0) {
            scoop.checkIsPressed()
        } else if (washclothesstep == 1) {
            clothes.checkIsPressed()
        } else if (washclothesstep == 2) {
            if (stickstep == 0||stickstep == 3) {
                astick.checkIsPressed()
            } else if (stickstep == 2) { 
                clothes.checkIsPressed() 
                console.log(2)}
        }
    }

}
function mouseReleased() {
    if (washwindow == true) {
        if (washclothesstep == 0) {
            scoop.isDragged = false
            disx = 0
            disy = 0
        } else if (washclothesstep == 1) {
            clothes.isDragged = false
        } else if (washclothesstep == 2) {
            if (stickstep == 0 ||stickstep == 3) {
                astick.isDragged = false
                disx = 0
                disy = 0
            }
            else if (stickstep == 2) { clothes.isDragged = false }

        }
    }


}

function instruction() { }

function mouseClicked() {
    //main window buttons
    if (mainwindow == true) {
        //to washwindow
        if (600 <= mouseX &&
            mouseX <= 630 &&
            800 <= mouseY &&
            mouseY <= 830) {
            mainwindow = false
            washwindow = true
        }
    }
    //return button
    // in wash window
    if (washwindow == true) {
        //to washwindow
        if (170 <= mouseX &&
            mouseX <= 220 &&
            30 <= mouseY &&
            mouseY <= 80) {
            mainwindow = true
            washwindow = false
        }
        //getwater1
        if (washclothesstep == 0) {
            if (waterstep == 0 || waterstep == 4 || waterstep == 8) {
                if (scoop.y <= 400) {
                    if ((scoop.x + 15 <= mouseX &&
                        mouseX <= scoop.x + 95 &&
                        scoop.y + 55 <= mouseY &&
                        mouseY <= scoop.y + 105) ||
                        (scoop.x + 95 <= mouseX &&
                            mouseX <= scoop.x + 295 &&
                            scoop.y + 10 <= mouseY &&
                            mouseY <= scoop.y + 135)) { waterstep += 1 }
                }
            } else if (waterstep == 1 || waterstep == 5 || waterstep == 9) {
                if (scoop.y <= 400) {
                    if ((scoop.x + 15 <= mouseX &&
                        mouseX <= scoop.x + 95 &&
                        scoop.y + 55 <= mouseY &&
                        mouseY <= scoop.y + 105) ||
                        (scoop.x + 95 <= mouseX &&
                            mouseX <= scoop.x + 295 &&
                            scoop.y + 10 <= mouseY &&
                            mouseY <= scoop.y + 135)) { waterstep += 1 }
                }
            } else if (waterstep == 2 || waterstep == 6 || waterstep == 10) {
                if (scoop.y >= 480 && scoop.y <= 680) {
                    if ((scoop.x + 15 <= mouseX &&
                        mouseX <= scoop.x + 95 &&
                        scoop.y + 55 <= mouseY &&
                        mouseY <= scoop.y + 105) ||
                        (scoop.x + 95 <= mouseX &&
                            mouseX <= scoop.x + 295 &&
                            scoop.y + 10 <= mouseY &&
                            mouseY <= scoop.y + 135)) {
                        waterstep += 1;
                    }
                }
            } else if (waterstep == 3 || waterstep == 7 || waterstep == 11) {

                if ((scoop.x + 15 <= mouseX &&
                    mouseX <= scoop.x + 95 &&
                    scoop.y + 55 <= mouseY &&
                    mouseY <= scoop.y + 105) ||
                    (scoop.x + 95 <= mouseX &&
                        mouseX <= scoop.x + 295 &&
                        scoop.y + 10 <= mouseY &&
                        mouseY <= scoop.y + 135)) {
                    waterstep += 1;
                }

            }
        }
        // draw the clothes
        else if (washclothesstep == 1) {
            if (clothesstep == 0) {
                if (mouseX <= 540 &&
                    mouseX >= 120 &&
                    mouseY <= 700 &&
                    mouseY >= 570) { clothesstep = 1 }

            } else if (clothesstep == 1) {
                if (mouseX <= 1100 &&
                    mouseX >= 640 &&
                    mouseY <= 850 &&
                    mouseY >= 500) { clothesstep = 2 }
            } else if (clothesstep == 2) {
                if (mouseX <= 540 &&
                    mouseX >= 120 &&
                    mouseY <= 700 &&
                    mouseY >= 570) { clothesstep = 3 }
            } else if (clothesstep == 3) {
                if (mouseX <= 1100 &&
                    mouseX >= 640 &&
                    mouseY <= 850 &&
                    mouseY >= 500) { clothesstep = 4 }
            } else if (clothesstep == 4) {
                if (mouseX <= 540 &&
                    mouseX >= 120 &&
                    mouseY <= 700 &&
                    mouseY >= 570) { clothesstep = 5 }
            } else if (clothesstep == 5) {
                if (mouseX <= 1100 &&
                    mouseX >= 640 &&
                    mouseY <= 850 &&
                    mouseY >= 500) { clothesstep = 6 }
            }
        } else if (washclothesstep == 2) {
            if (stickstep == 0) {
                if (mouseX <= 900 &&
                    mouseX >= 650 &&
                    mouseY <= 850 &&
                    mouseY >= 550) {
                    astick.isStriking = true
                }
            } else if (stickstep == 1) {
                if (mouseX <= 1100 &&
                    mouseX >= 640 &&
                    mouseY <= 850 &&
                    mouseY >= 500) {
                    stickstep = 2
                }
            } else if (stickstep == 2) {
                if (mouseX <= 540 &&
                    mouseX >= 120 &&
                    mouseY <= 700 &&
                    mouseY >= 570 ){
                    stickstep = 3
                }
            }else if (stickstep==3){
                if (mouseX <= 900 &&
                    mouseX >= 650 &&
                    mouseY <= 850 &&
                    mouseY >= 550) {
                    astick.isStriking = true
                }
            }
        }
    }

}

function returnButton() {
    if (mainwindow == false) {
        fill(250)
        strokeWeight(0)
        rect(170, 30, 50, 50)
        fill(0)
        textSize(30)
        text("🔙", 180, 66)
    }
}
//show the end of day
function time() {
    if (frameCount >= 43200) {
        fill(255)
        push()
        translate(width / 2, height / 2)
        rect(-300, -150, 600, 300)
        fill(0)
        textSize(30)
        text("Congrats! The day is over.", -180, -20)
        text("Refresh to start another day~", -195, 40)
        pop()
    }

    //display time in the left up corner
}
function timeDisplay() {
    fill(250)
    strokeWeight(0)
    rect(30, 30, 120, 50)
    fill(0)
    textSize(30)

}
//controle the light condition
function lightControl() {
    fill(30, 30, 50, 80)
    rect(0, 0, 1366, 1024)
}
