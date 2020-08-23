function setup() {
    createCanvas(1280, 400);

    // put setup code here
}
function geschoss () {
    strokeWeight(0);
    fill("#000000");
    ellipse(kugelX, 275, 30, 30);
}
var level = true;
var kugelX = 1320;
var boden ;
var herzen = 3;
var ducken = 50;
var value = 1;
var ballX = 25;
var ballY = 275;
var springen = false;

var fallen = false;
var vv = 2;
var a = 1.1;

function preload() {
    Heart = loadImage('heart_PNG704.png');


}

250
draw = function () {
    background("#0000ff");
    strokeWeight(1);
    if (herzen === 3) {
        image(Heart, 20, 10, 40, 30);
        image(Heart, 60, 10, 40, 30);
        image(Heart, 100, 10, 40, 30);
    } else if (herzen == 2) {
        image(Heart, 20, 10, 40, 30);
        image(Heart, 60, 10, 40, 30);

    } else if (herzen === 1) {
        image(Heart, 20, 10, 40, 30);
    }


    fill("#f00");
    rect(0, 300, 1280, 300);
    fill("#00ff00");
    ellipse(ballX, ballY, ducken, ducken);
    fill("#4F2A18");
    rect(450, 0, 200, 250);



    geschoss();
    strokeWeight(1);
    fill("#e38e1b");
    rect(1240, 250, 40, 50);
    rect(1228, 246, 12, 58);
    kugelX -= 4,7;

    if (ballX >= 1228 && ballY > 247) {
        boden = 248;
    }
    if (ballX < 1228) {
        boden = 275;
    }
    if (ballX >= 1305 && ballY >= 275) {
        background(0, 255, 0)
        textSize(100);
        text("Du bestehst Level 1. ", 150, 140);
        level=false;
    }
    if (kugelX <= 930) {
        kugelX = 1333;
    }

    if (ballX > kugelX - 15 && ballX < kugelX + 15 && ballY > 260 && ballY < 290&&level===true) {
        herzen -= 1;
        ballX = 25;
        ballY === 275;
    }
    if (ballX === 0) {
        value = 2;
    }

    if (ballX === 450) {
        value = 3;
    }
    if (ballX > 0 && ballX < 1280) {
        value = 1;
    }
    if (ballX >= 452 && ballX <= 650 && ducken === 50 && herzen > 0&&level===true) {
        herzen -= 1;
        ballX = 25;
        ballY === 275;
    }
    if (ballX >= 452 && ballX <= 650 && ducken === 25 && herzen > 0 && ballY < 250&&level===true) {
        herzen -= 1;
        ballX = 25;
        ballY === 275;
    }
    if (herzen === 0) {
        background(0, 0, 0);

        fill(255, 0, 0);
        textSize(100);
        text("Game Over", 330, 230);
        textSize(30);
        text("Seite neuladen zum Neustarten", 368, 320);
        level = false;
    }
    if (keyIsDown(DOWN_ARROW)) {
        ducken = 25;

    } else {
        ducken = 50;
    }
    if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW) && value === 1 || value === 2 && level === true && springen === false) {
        ballX += 5;
        ballY -= 5;

    }
    if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW) && value === 1 || value === 3 && level === true && springen === false) {
        ballX -= 5;
        ballY -= 5;
    }
    if (keyCode === RIGHT_ARROW && keyIsPressed === true && value === 1 || value === 2) {
        ballX += 5;
    }
    if (keyCode === LEFT_ARROW && keyIsPressed && value === 1 || value === 3) {
        ballX -= 5;
    }

    if (ballX >= 1203) {
        boden = 225;
    }
    if (ballX < 1203) {
        boden = 275;
    }
    if (vv <= 0 && springen === true) {
        springen = false;
    }
    if (springen === true) {
        vv -= a;
        vv = Math.round(vv);
        vv = Math.max(vv, 0);
        ballY -= vv;
    }
    // fallen
    if (ballY <= boden && springen === false) {
        fallen = true;
        vv += a;
        vv = Math.round(vv);
        var abstandVomBoden = boden - ballY;
        vv = Math.min(vv, abstandVomBoden);
        ballY += vv;
    }

}

function keyPressed() {
    if (keyCode === UP_ARROW && springen === false && ballY === boden) {
        springen = true;
        vv = 20; // v_0 springen
    }
}

/*if (ballX >= 452 && ballX <= 650 && ducken === 50 && herzen > 0) {
    herzen -= 1;
    ballX = 25;
}*/

