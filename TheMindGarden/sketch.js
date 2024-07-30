let def = 1;
let ne = 1;
let flowerx = [];
let flowery = [];
let tryx = [];
let tryy = [];
let i = 0;
let a = -1;
let wide = [[]];
let high = [[]];
let paint = false;
let ripplex = [];
let rippley = [];
let m = 0;
let R = [[]];
let G = [[]];
let B = [[]];
let leavesnum = [[]];
let angle = [[]];
let feedpanel = false;
let delay = false;
let now = 1;
let myInput;
let growrate = [1];
let button;
let moodswitch = [];
let r = 0;
let g = 0;
let b = 0;
let newlayer = [];
let nlayers = 0;
let ratepanel = false;
let rr = 0;
let gg = 0;
let bb = 0;
let rule;
let randx = 0;
let randy = 0;
let instruction1 = true;
let instruction2 = false;
let instruction1opentimes = 0;
let instruction2opentimes = 0;
// let newlayer=false
function setup() {
    let cnv = createCanvas(800, 500);
    cnv.parent("p5-canvas-container")
}

function draw() {
    if (instruction1 == true) {
        textFont("Courier New", 25);
        textSize(30);
        fill(255);
        if (feedpanel == false && ratepanel == false) {
            text("Please click somewhere", 195, 60);
            text("to grow your own mind flowers!", 140, 100);
        } else {
            fill(198, 223, 223);
            rect(0, 0, 800, 500);
        }
    }
    background(200, 220, 220, 40);
    //makebutton
    fill(170, 210, 200);
    strokeWeight(0);
    ellipse(90, 445, 120, 60);
    fill(130, 170, 130);
    ellipse(90, 445, 100, 50);
    fill(255);
    textSize(25);
    text("Feed", 61, 453);

    if (mouseIsPressed && mouseX < 150 && mouseY > 415 && ratepanel == false) {
        feedpanel = true;
    }
    //feedpanel
    if (feedpanel == true) {
        instruction2opentimes += 1;
        panelOn();
    }
    if (instruction2opentimes >= 1) {
        instruction2 = false;
    }
    //ratepanel

    if (ratepanel == true) {
        rateOn();
    }
    //in the growing panel
    if (feedpanel == false && ratepanel == false && frameCount > now + 10) {
        if (mouseIsPressed && (mouseX > 180 || mouseY < 390)) {
            instruction1 = false;
            instruction1opentimes += 1;
            if (instruction1opentimes == 1) {
                fill(198, 223, 223);
                rect(0, 0, 800, 500);
            }
            if (instruction2opentimes == 0) {
                instruction2 = true;
            }

            a += 1;
            tryx[a] = mouseX;
            tryy[a] = mouseY;
            if (a > 0) {
                paint = true;
                for (let x = 0; x < i; x++) {
                    let distanceX = Math.abs(tryx[a] - flowerx[x]);
                    let distanceY = Math.abs(tryy[a] - flowery[x]);
                    if (distanceX < 80 && distanceY < 80) {
                        paint = false;
                    }
                }
            } else {
                paint = true;
            }
        }
        if (paint == true) {
            angle[0][i] = random(0, 2 * PI);
            flowerx[i] = tryx[a];
            flowery[i] = tryy[a];
            //generating leaves in random siz
            wide[0][i] = random(10, 20);
            high[0][i] = random(wide[0][i] + 5, wide[0][i] + random(10, 20));
            //draw one leaf
            R[0][i] = random(230, 250);
            G[0][i] = random(230, 250);
            B[0][i] = random(230, 250);
            fill(R[0][i], G[0][i], B[0][i], 150);
            strokeWeight(1);
            stroke(R[0][i], G[0][i], B[0][i], 150);
            push();
            translate(flowerx[i], flowery[i]);
            ellipse(0, -high[0][i] / 1.5, wide[0][i], high[0][i]);
            pop();
            //make the whole flower
            leavesnum[0][i] = random(5, 7);
            for (
                let x = (PI * 2) / leavesnum[0][i];
                x < 2 * PI - (PI * 2) / (leavesnum[0][i] + 6);
                x += (PI * 2) / leavesnum[0][i]
            ) {
                push();
                translate(flowerx[i], flowery[i]);
                rotate(x);
                ellipse(0, -high[0][i] / 1.5, wide[0][i], high[0][i]);
                pop();
            }
            angle[0][i] = random(0, 2 * PI);
            i += 1;
            paint = false;
        }
        //draw all previous flowers
        for (let s = 0; s < i; s++) {
            //make the flower sway
            let anxious = 1;
            if (moodswitch[moodswitch.length - 1] == "anxious") {
                anxious = 20;
            }
            let angry = 1;
            let angry2 = 0;
            if (moodswitch[moodswitch.length - 1] == "angry") {
                angry = 1;
                angry2 = 8;
                anxious = 10;
            }
            let happy = 1;
            if (moodswitch[moodswitch.length - 1] == "happy") {
                happy = 1.5;
                angry = 2;
            }

            if (frameCount % (60 / anxious) == 1) {
                if (randx >= 8 + angry2) {
                    randx += random(-10 - angry2, -3);
                } else if (randx <= -8 - angry2) {
                    randx += random(3, 10 + angry2);
                }
                if (randy >= 8 + angry2) {
                    randy += random(-10 - angry2, -3);
                } else if (randy <= -8 - angry2) {
                    randy += random(3, 10 + angry2);
                }
                if (-8 < randx < 8 && -8 < randy < 8) {
                    randx += random(-1 - angry2, 1 + angry2);
                    randy += random(-1 - angry2, 1 + angry2);
                }
            }
            let speedx = angry * 10 * sin(angle[0][s]) + randx;
            let speedy = angry * 10 * cos(angle[0][s]) + randy;
            //make shadow
            //shadow of one leaf
            fill(186, 218, 214);
            strokeWeight(3);
            stroke(186, 218, 214);
            push();
            if (frameCount % 5 == 1) {
                angle[0][s] += 0.15 * 1.5 * happy;
            }

            translate(flowerx[s] + speedx, flowery[s] + speedy);
            scale(1.3);
            ellipse(
                0,
                growrate[0] * (-high[0][s] / 1.5),
                growrate[0] * wide[0][s],
                growrate[0] * high[0][s]
            );
            pop();
            //shadow of the whole flower
            for (
                let x = (PI * 2) / leavesnum[0][s];
                x < 2 * PI - (PI * 2) / (leavesnum[0][s] + 6);
                x += (PI * 2) / leavesnum[0][s]
            ) {
                push();
                translate(flowerx[s] + speedx, flowery[s] + speedy);
                scale(1.3);
                rotate(x);
                ellipse(
                    0,
                    growrate[0] * (-high[0][s] / 1.5),
                    growrate[0] * wide[0][s],
                    growrate[0] * high[0][s]
                );
                pop();
            }
            //draw one leaf
            fill(R[0][s] + r, G[0][s] + g, B[0][s] + b, 150);
            strokeWeight(1);
            stroke(R[0][s] + r, G[0][s] + g, B[0][s] + b, 150);
            push();
            translate(flowerx[s] + speedx, flowery[s] + speedy);
            ellipse(
                0,
                growrate[0] * (-high[0][s] / 1.5),
                growrate[0] * wide[0][s],
                growrate[0] * high[0][s]
            );
            pop();
            //make the whole flower
            for (
                let x = (PI * 2) / leavesnum[0][s];
                x < 2 * PI - (PI * 2) / (leavesnum[0][s] + 6);
                x += (PI * 2) / leavesnum[0][s]
            ) {
                push();
                translate(flowerx[s] + speedx, flowery[s] + speedy);
                rotate(x);
                ellipse(
                    0,
                    growrate[0] * (-high[0][s] / 1.5),
                    growrate[0] * wide[0][s],
                    growrate[0] * high[0][s]
                );
                pop();
            }
            if (nlayers >= 1) {
                for (let layer = 1; layer <= nlayers; layer++) {
                    //draw triangles for even layer
                    if (layer % 3 == 1) {
                        fill(R[layer][s], G[layer][s], B[layer][s], 150);
                        stroke(R[layer][s], G[layer][s], B[layer][s], 150);
                        push();
                        translate(flowerx[s] + speedx, flowery[s] + speedy);
                        rotate((2 * PI) / leavesnum[layer][s]);
                        triangle(
                            0,
                            2,
                            0 - (wide[layer][s] * growrate[layer]) / 2,
                            (-high[layer][s] * growrate[layer]) / 5 - high[layer][s],
                            0 + (wide[layer][s] * growrate[layer]) / 2,
                            (-high[layer][s] * growrate[layer]) / 5 - high[layer][s]
                        );
                        pop();
                        //make the whole flower
                        for (
                            let x = (2 * (PI * 2)) / leavesnum[layer][s] - 0.2;
                            x < 2 * PI + 0.5;
                            x += (PI * 2) / leavesnum[layer][s]
                        ) {
                            push();
                            translate(flowerx[s] + speedx, flowery[s] + speedy);
                            rotate(x);
                            triangle(
                                0,
                                2,
                                0 - (wide[layer][s] * growrate[layer]) / 2,
                                (-high[layer][s] * growrate[layer]) / 5 - high[layer][s],
                                0 + (wide[layer][s] * growrate[layer]) / 2,
                                (-high[layer][s] * growrate[layer]) / 5 - high[layer][s]
                            );
                            pop();
                        }
                    }
                    if (layer % 3 == 2) {
                        //draw one leaf
                        fill(R[layer][s] + r, G[layer][s] + g, B[layer][s] + b, 150);
                        strokeWeight(1);
                        stroke(R[layer][s] + r, G[layer][s] + g, B[layer][s] + b, 150);
                        push();
                        translate(flowerx[s] + speedx, flowery[s] + speedy);
                        rotate((PI * 2) / leavesnum[layer][s]);
                        ellipse(
                            0,
                            growrate[layer] * (-high[layer][s] / 1.5),
                            growrate[layer] * wide[layer][s],
                            growrate[layer] * high[layer][s]
                        );
                        pop();
                        //make the whole flower
                        for (
                            let x = (2 * (PI * 2)) / leavesnum[layer][s];
                            x < 2 * PI + PI / leavesnum[layer][s];
                            x += (PI * 2) / leavesnum[layer][s]
                        ) {
                            push();
                            translate(flowerx[s] + speedx, flowery[s] + speedy);
                            rotate(x);
                            ellipse(
                                0,
                                growrate[layer] * (-high[layer][s] / 1.5),
                                growrate[layer] * wide[layer][s],
                                growrate[layer] * high[layer][s]
                            );
                            pop();
                        }
                    }
                }
            }
        }
        if (instruction2 == true) {
            textSize(25);
            fill(255);
            text("Click the feed button to", 32, 360);
            text("feed your creature with mood!", 28, 390);
        }
        if (instruction2opentimes == 1) {
            fill(198, 223, 223);
            rect(0, 0, 800, 500);
        }

        //draw the ripple
        let touchflower = false;
        for (let q = 0; q < i; q++) {
            mouseflowerdisx = Math.abs(mouseX - flowerx[q]);
            mouseflowerdisy = Math.abs(mouseY - flowery[q]);
            if (mouseflowerdisx < high[0][q] && mouseflowerdisy < high[0][q]) {
                touchflower = true;
            }
        }
        if (touchflower == false) {
            if (m > 0) {
                mousedisx = Math.abs(mouseX - ripplex[m - 1]);
                mousedisy = Math.abs(mouseY - rippley[m - 1]);
                if (mousedisx < 30 && mousedisy < 30) {
                    touchflower = true;
                }
                if (mouseX < 200 && mouseY > 350) {
                    touchflower = true;
                }
            }

            if (touchflower == false) {
                ripplex[m] = mouseX;
                rippley[m] = mouseY;
                fill(180, 220, 210);
                strokeWeight(0);
                circle(ripplex[m], rippley[m], random(80, 130));
                m += 1;
            }
        }
    }

    function panelOn() {
        strokeWeight(0);
        //happy
        fill(230, 200, 200, 90);
        rect(160, 140, 240, 120);
        //angry
        fill(235, 215, 190, 90);
        rect(400, 140, 240, 120);
        //sad
        fill(195, 200, 225, 90);
        rect(160, 260, 240, 120);
        //anxious
        fill(200, 220, 190, 90);
        rect(400, 260, 240, 120);

        fill(255, 80);
        rect(610, 140, 30, 30);
        text("✖️", 613, 165);
        textSize(30);
        fill(255);
        text("Happy", 233, 210);
        //text("If you feel happy, please");
        text("Angry", 475, 210);
        text("Sad", 250, 323);
        text("Anxious", 460, 323);
        text("Please click to choose your mood", 115, 110);

        //feedpanel close button
        if (
            feedpanel == true &&
            mouseIsPressed &&
            mouseX < 643 &&
            mouseX > 613 &&
            mouseY < 165 &&
            mouseY > 135
        ) {
            feedpanel = false;
            fill(198, 223, 223);
            rect(0, 0, 800, 500);
            delay = true;
        }

        if (feedpanel == true) {
            //happy
            if (
                mouseIsPressed &&
                mouseX < 400 &&
                mouseX > 160 &&
                mouseY < 260 &&
                mouseY > 140
            ) {
                feedpanel = false;
                ratepanel = true;
                moodswitch.push("happy");
            }
            //angry
            else if (
                mouseIsPressed &&
                ((mouseX < 610 && mouseY > 140) || (mouseX < 640 && mouseY > 170)) &&
                mouseX > 400 &&
                mouseY < 260
            ) {
                feedpanel = false;
                ratepanel = true;
                moodswitch.push("angry");
            }
            //sad
            else if (
                mouseIsPressed &&
                mouseX < 400 &&
                mouseX > 160 &&
                mouseY < 380 &&
                mouseY > 260
            ) {
                feedpanel = false;
                ratepanel = true;
                moodswitch.push("sad");
            }
            //anxious
            else if (
                mouseIsPressed &&
                mouseX < 640 &&
                mouseX > 400 &&
                mouseY < 380 &&
                mouseY > 260
            ) {
                feedpanel = false;
                ratepanel = true;
                moodswitch.push("anxious");
            }
        }
        if (delay == true) {
            now = frameCount;
            delay = false;
        }
    }
    //a function that matches different actions to different mood and its score

    function rateOn() {
        fill(210, 230, 220, 90);
        rect(160, 140, 480, 240);
        fill(255, 80);
        rect(610, 140, 30, 30);
        text("✖️", 613, 165);
        textSize(30);
        fill(255);
        text("Please click to choose the level of mood", 45, 110);
        for (let x = 0; x < 5; x++) {
            fill(255, 80);
            rect(215 + 80 * x, 232, 50, 50);
            fill(0, 80);
            textSize(45);
            text(x + 1, 228 + 80 * x, 271);
        }
        if (
            mouseIsPressed &&
            mouseX < 643 &&
            mouseX > 613 &&
            mouseY < 165 &&
            mouseY > 135
        ) {
            ratepanel = false;
            fill(198, 223, 223);
            rect(0, 0, 800, 500);
            delay = true;
        }
        //1
        if (
            mouseIsPressed &&
            mouseX < 265 &&
            mouseX > 215 &&
            mouseY < 282 &&
            mouseY > 232
        ) {
            if (moodswitch[moodswitch.length - 1] == "happy") {
                growingSystem(moodswitch, 5, -5, -5, 2);
            } else if (moodswitch[moodswitch.length - 1] == "angry") {
                growingSystem(moodswitch, 4, 4, -5, 2);
            } else if (moodswitch[moodswitch.length - 1] == "sad") {
                growingSystem(moodswitch, -5, -5, 5, 2);
            } else if (moodswitch[moodswitch.length - 1] == "anxious") {
                growingSystem(moodswitch, 1, 5, -5, 2);
            }
            fill(198, 223, 223);
            rect(0, 0, 800, 500);
            delay = true;
            ratepanel = false;
        }
        //2
        if (
            mouseIsPressed &&
            mouseX < 345 &&
            mouseX > 295 &&
            mouseY < 282 &&
            mouseY > 232
        ) {
            if (moodswitch[moodswitch.length - 1] == "happy") {
                growingSystem(moodswitch, 5, -5, -5, 4);
            } else if (moodswitch[moodswitch.length - 1] == "angry") {
                growingSystem(moodswitch, 4, 4, -5, 4);
            } else if (moodswitch[moodswitch.length - 1] == "sad") {
                growingSystem(moodswitch, -5, -5, 5, 4);
            } else if (moodswitch[moodswitch.length - 1] == "anxious") {
                growingSystem(moodswitch, 1, 5, -5, 4);
            }
            fill(198, 223, 223);
            rect(0, 0, 800, 500);
            delay = true;
            ratepanel = false;
        }
        //3
        if (
            mouseIsPressed &&
            mouseX < 425 &&
            mouseX > 375 &&
            mouseY < 282 &&
            mouseY > 232
        ) {
            if (moodswitch[moodswitch.length - 1] == "happy") {
                growingSystem(moodswitch, 5, -5, -5, 6);
            } else if (moodswitch[moodswitch.length - 1] == "angry") {
                growingSystem(moodswitch, 4, 4, -5, 6);
            } else if (moodswitch[moodswitch.length - 1] == "sad") {
                growingSystem(moodswitch, -5, -5, 5, 6);
            } else if (moodswitch[moodswitch.length - 1] == "anxious") {
                growingSystem(moodswitch, 1, 5, -5, 6);
            }
            fill(198, 223, 223);
            rect(0, 0, 800, 500);
            delay = true;
            ratepanel = false;
        }
        //4
        if (
            mouseIsPressed &&
            mouseX < 505 &&
            mouseX > 455 &&
            mouseY < 282 &&
            mouseY > 232
        ) {
            if (moodswitch[moodswitch.length - 1] == "happy") {
                growingSystem(moodswitch, 5, -5, -5, 8);
            } else if (moodswitch[moodswitch.length - 1] == "angry") {
                growingSystem(moodswitch, 4, 4, -5, 8);
            } else if (moodswitch[moodswitch.length - 1] == "sad") {
                growingSystem(moodswitch, -5, -5, 5, 8);
            } else if (moodswitch[moodswitch.length - 1] == "anxious") {
                growingSystem(moodswitch, 1, 5, -5, 8);
            }
            fill(198, 223, 223);
            rect(0, 0, 800, 500);
            delay = true;
            ratepanel = false;
        }
        //5
        if (
            mouseIsPressed &&
            mouseX < 585 &&
            mouseX > 535 &&
            mouseY < 282 &&
            mouseY > 232
        ) {
            if (moodswitch[moodswitch.length - 1] == "happy") {
                growingSystem(moodswitch, 5, -5, -5, 10);
            } else if (moodswitch[moodswitch.length - 1] == "angry") {
                growingSystem(moodswitch, 4, 4, -5, 10);
            } else if (moodswitch[moodswitch.length - 1] == "sad") {
                growingSystem(moodswitch, -5, -5, 5, 10);
            } else if (moodswitch[moodswitch.length - 1] == "anxious") {
                growingSystem(moodswitch, 1, 5, -5, 10);
            }
            fill(198, 223, 223);
            rect(0, 0, 800, 500);
            delay = true;
            ratepanel = false;
        }
        if (delay == true) {
            now = frameCount;
            delay = false;
        }
    }

    function growingSystem(moodswitch, rr, gg, bb, score) {
        if (1.5 - 0.1 * nlayers > 1.2) {
            rule = 1.5 - 0.1 * nlayers;
        } else {
            rule = 1.2;
        }
        let noonedisappear = true;

        for (let x = 0; x < i; x++) {
            if (
                growrate[nlayers] * high[nlayers][x] < 10 ||
                growrate[nlayers] * wide[nlayers][x] < 5
            ) {
                R.splice(x, 1);
                G.splice(x, 1);
                B.splice(x, 1);
                flowerx.splice(x, 1);
                flowery.splice(x, 1);
                wide.splice(x, 1);
                high.splice(x, 1);
                noonedisappear = false;
            }
        }
        if (score >= 8) {
            r += rr - nlayers * 0.5;
            g += gg - nlayers * 0.5;
            b += bb - nlayers * 0.5;
        }
        len2 = moodswitch.length;
        if (moodswitch[len2 - 1] != "happy") {
            if (len2 > 2) {
                if (
                    moodswitch[len2 - 1] == moodswitch[len2 - 2] &&
                    moodswitch[len2 - 3] == moodswitch[len2 - 2]
                ) {
                    if (noonedisappear == true) {
                        growrate[nlayers] -= 0.05;
                    }
                } else if (score <= 8) {
                    if (growrate[nlayers] <= rule) {
                        growrate[nlayers] += 0.1;
                    }
                }
            } else if (score <= 8) {
                if (growrate[nlayers] <= rule) {
                    growrate[nlayers] += 0.1;
                }
            }
        } else {
            if (score <= 8) {
                if (growrate[nlayers] <= rule) {
                    growrate[nlayers] += 0.1;
                }
            }
        }
    }

    if (growrate[nlayers] >= rule) {
        nlayers += 1;
        growrate[nlayers] = 1;
        leavesnum[nlayers] = [];
        wide[nlayers] = [];
        high[nlayers] = [];
        R[nlayers] = [];
        G[nlayers] = [];
        B[nlayers] = [];
        angle[nlayers] = [];
        for (let s = 0; s < i; s++) {
            setOneLeaf(nlayers, s);
        }
    }
}
function setOneLeaf(layer, s) {
    //generating leaves in random siz
    wide[layer][s] = random(10, 15);
    high[layer][s] = random(wide[layer][s] + 5, wide[layer][s] + random(8, 18));
    //draw one leaf
    if (layer % 2 == 1) {
        R[layer][s] = random(230, 250);
        G[layer][s] = random(230, 250);
        B[layer][s] = random(230, 250);
    } else {
        R[layer][s] = random(230 - layer * 10, 250);
        G[layer][s] = random(230 - layer * 10, 250);
        B[layer][s] = random(230 - layer * 10, 250);
    }
    leavesnum[layer][s] = random(5, 7);
}
