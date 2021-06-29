function setup() {
    createCanvas(1280, 400);

    // put setup code here
}
function geschoss () {
    strokeWeight(0);
    fill("#000000");
    ellipse(kugelX, 275, 30, 30);
}
var ki = true;
var hek = 0;
var db = 0;
var he = true;
var sichtweite = true; //true ist rechts false links
var level = true;
var kugelX = 1320;
var boden ;
var herzen = 3;
var ducken = 50;
var value = 1;
var ballX = 205; //spieler
var ballY = 275; //spieler
var springen = false;
var gott = false;
var fallen = false;
var vv = 2;
var a = 1.1;
var speed = 5;
var invis = false;
function preload() {
    Heart = loadImage('heart_PNG704.png');
    heartcrown = loadImage('heart_crown.png');
}


























draw = function () {
    background("#0000ff");
    strokeWeight(1);

    if (gott===true) {
        textSize(30);
        text("God",20,30);
        herzen=1000000000000;
   speed=15;
    }
    if (herzen === 4) {
        image(Heart, 20, 10, 40, 30);
        image(Heart, 60, 10, 40, 30);
        image(Heart, 100, 10, 40, 30);
        image(heartcrown, 140, -2, 40, 45);
        speed = 10;

    }
    if (herzen === 3) {
        image(Heart, 20, 10, 40, 30);
        image(Heart, 60, 10, 40, 30);
        image(Heart, 100, 10, 40, 30);
        speed = 5;
    } else if (herzen == 2) {
        image(Heart, 20, 10, 40, 30);
        image(Heart, 60, 10, 40, 30);

    } else if (herzen === 1) {
        image(Heart, 20, 10, 40, 30);

    }

 if (he===true) {
    image(Heart, 650, 100, 50, 40);
}
    if (ballX>=650&&ballX<=695&&ballY>=104&&ballY<=134&&hek===0) {
      he =false;
      herzen++;
      hek= 1;
    }



    fill("#f00");
    rect(0, 300, 1280, 300);

    if (herzen>3) {
        invis=true;
        fill("#0000ff");
        ellipse(ballX, ballY, ducken, ducken);

        //text("invisible",ballX-20,ballY-30)

    }else {
        fill("#00ff00");
        ellipse(ballX, ballY, ducken, ducken);
        invis = false;
    }

    if(sichtweite===true) {
        fill("#00f");
        ellipse(ballX+10,ballY-8,5,5);
    }
    else {
        fill("#00f");
        ellipse(ballX-10,ballY-8,5,5);
    }
    fill("#8d4410")
    rect(450, 0, 200, 250);


if (invis===true) {
   ki =false;
    kugelX=1333;



}
if (ballX<=650) {
    ki=false;
    kugelX=1333;
}else{
    ki=true;
}
if (boden===225) {
    ki=false;
    kugelX=1333;


}

if (invis===false)
    if (ki===true) {
        geschoss();
        strokeWeight(1);

        kugelX -= 4;
    }
    fill("#e38e1b");
    rect(1240, 250, 40, 50);
    rect(1228, 246, 12, 58);
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
    }if (ballX >= 1305 && ballY >= 275&&gott===true) {
        background(0, 255, 0)
        textSize(80);
        text("Du bestehst Level 1(als god). ", 35, 140);
        level=false;
    }
    if (kugelX <= ballX-180) {
        kugelX = 1333;
    }

    if (ballX > kugelX - 15 && ballX < kugelX + 15 && ballY > 260 && ballY < 290&&level===true&&gott===false) {
        herzen -= 1;
       ballX = 25;
        ballY === 75;
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
    if (ballX >= 452 && ballX <= 650 && ducken === 50 && herzen > 0&&level===true&&gott===false) {
        herzen -= 1;
        ballX = 25;
        ballY === 75;
        fallen=true;
    }
    if (ballX >= 452 && ballX <= 650 && ducken === 25 && herzen > 0 && ballY < 250&&level===true&&gott===false) {
        herzen -= 1;
        ballX = 25;
        ballY === 75;
        fallen=true;



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
        ballX += speed;
        ballY -= speed;
        sichtweite=true;
    }
    if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW) && value === 1 || value === 3 && level === true && springen === false) {
        ballX -= speed;
        ballY -= speed;
        sichtweite=false;
    }
    if (keyCode === RIGHT_ARROW && keyIsPressed === true && value === 1 || value === 2) {
        ballX += speed;
        sichtweite=true;
    }
    if (keyCode === LEFT_ARROW && keyIsPressed && value === 1 || value === 3) {
        ballX -= speed;
        sichtweite=false;
    }

    if (ballX >= 1203) {
        boden = 225;
    }
    if (ballY+25===300) {
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
    if (keyCode === UP_ARROW && springen === false && ballY === boden&&db<=2) {
        springen = true;
        vv = 15; // v_0 springen

    }
}

/*if (ballX >= 452 && ballX <= 650 && ducken === 50 && herzen > 0) {
    herzen -= 1;
    ballX = 25;
}*/

