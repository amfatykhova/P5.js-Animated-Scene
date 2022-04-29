/*
Amelia Fatykhova
CS 3451 Spring 2022
Project 2a

Instancing: I am replicating the duck to create a flock

~PLOT~
A flock of ducks is migrating
The lead duck was trained in falconry
A human on the ground is the falconer
The duck flies down
The human raises their arm
The duck lands
The human rotats their head to look at the duck
The duck flies away
The human looks towards the flying duck
camera looks at the human looking at the duck...

camera pans to floating cube with message and image:
  "A man and his duck - The End"

*/

let time = 0;  // track the passage of time, used to move the objects
let flapTime = 0;

let img;
function preload() {
  img = loadImage('assets/man_and_duck.png');
  
}

// called once at the start
function setup() {
  createCanvas(800, 800, WEBGL);
  let fov = 40.0;  // 85 degrees FOV (15 for orbit control)
  perspective(PI * fov / 180.0, width / height, 0.1, 2000);
}

// this is called repeatedly to draw new per-frame images
function draw() {
  // orbitControl();
  normalMaterial();
  
  background(0,191,255);  // light blue background
  
  // CAMERA ROUTINE:
  if (time <= 10) {
    camera(0, -150, 800 + time*10, 0, 0, 0, 0, 1, 0);
  }  
  if (time > 10 && time < 20) {
    camera(100, 175, 1200 + (time - 9)*13, -6, 0, 0, 0, 1, 0);
  }
  if (time >= 20 && time < 27) {
    camera(100, 150, 900, -60, 344, 360, 0, 1, 0);
  }
  if (time >= 27 && time <= 35) {
    camera(100, 170, 600, -60, 344, 360, 0, 1, 0);
  }
  if (time > 35 && time <= 42) {
    camera (300, 200, 500, -60, 344, 360, 0, 1, 0);
  }
  if (time > 42 && time <= 53) {
    camera(-300, 200, 600, -60, 344, 360, 0, 1, 0);
  }
  if (time > 53 && time < 65) {
    camera(0, 300, 100, 0, -300, 1000, 0, 1, 0);
  }
  if (time >= 65 && time < 75) {
    camera(40, -300, 1300, -60, 344, 360, 0, 1, 0);
  }
  if (time >= 75 && time < 80) {
    camera(0, 100, 1300, 0, 0, 0, 0, 1, 0);
  }
  if (time >= 80 && time < 95) {
    camera(0, 100, 1300 + (time - 79)*10, 0, 0, 0, 0, 1, 0);
  }
  if (time > 100 && time < 110) {
    camera(0, 100, 1400 - (time - 99)*60, 0, 0, 0, 0, 1, 0);
  }
  
 
    
  
  // include some light even in shadows
  ambientLight(80, 80, 80);
  
  // set light position
  // The sun is located high in the sky
  pointLight(255, 255, 255, 100, -500, 300);

  noStroke();  // do not draw polygon outlines
  
  let delta = 25;
  
  function createEndCube() {
    push();
    texture(img);
    box(300);
    pop();
  }
  
  function createBird() {
    // body
    push();
    fill(139,69,19);
    scale(10, 15, 10);
    ellipsoid(1, 1, 1);
    pop();
    
    // kneck
    push();
    fill(255,255,240);
    translate(0, -15, 5);
    rotateX(-1.1);
    cylinder(2.5, 15);
    pop();
    
    // head
    push();
    fill(0,128,128);
    translate(0, -20, 12);
    scale(5, 5, 5);
    sphere(1);
    pop();
    
    // beak
    push();
    fill(255,255,0);
    translate(0, -17, 17);
    rotateX(1.2);
    cone(4, 14, 1);
    pop();
    
    // right eye
    push();
    fill(0, 0, 0);
    translate(3, -20, 16);
    sphere(1);
    pop();
    
    // left eye
    push();
    fill(0, 0, 0);
    translate(-3, -20, 16);
    sphere(1);
    pop();
    
    // left leg
    push();
    fill(255,130,67);
    translate(-4, 15, 5);
    rotateX(1.1);
    scale(2, 10, 2);
    ellipsoid(1, 1, 1);
    pop();
    
    
    // right leg
    push();
    fill(255,130,67);
    // translate[x, y, z]
    translate(4, 15, 5);
    rotateX(1.1);
    scale(2, 10, 2);
    ellipsoid(1, 1, 1);
    pop();
    
    // right foot
    push();
    fill(255,130,67);
    translate(4, 20, 15);
    scale(2.5);
    sphere(1);
    pop();
    
    // left foot
    push();
    fill(255,130,67);
    translate(-4, 20, 15);
    scale(2.5);
    sphere(1);
    pop();
    
    // NEST THE WINGS
    
    
    /*
    FLAPPING
    */
    
    // LEFT WING
    push();
    
    if (Math.floor(time)%2 == 0) {
      rotateZ(-0.5);
    }
    if (Math.floor(time)%2 != 0) {
      rotateZ(0.5);
    }
    
      
    // left wing joint 1
    push();
    fill(169,154,134);
    translate(-10, -5, 0);
    scale(10, 1.5, 6);
    ellipsoid(1, 1, 1);
    pop();
    
    // left wing joint 2
    push();
    fill(255,255,240);
    translate(-24, -9, 1);
    rotateZ(0.5);
    scale(10, 1.5, 6);
    ellipsoid(1, 1, 1);
    pop();
    
    // left wing joint 3
    push();
    fill(112,66,65);
    translate(-44, -6, 1);
    rotateZ(-0.5);
    scale(16, 1.5, 7);
    ellipsoid(1, 1, 1);
    pop();
    
    pop();
    
    // RIGHT WING
    push();
    
    if (Math.floor(time)%2 == 0) {
      rotateZ(0.5);
    }
    if (Math.floor(time)%2 != 0) {
      rotateZ(-0.5);
    }
    
    // right wing joint 1
    push();
    fill(169,154,134);
    translate(10, -5, 0);
    scale(10, 1.5, 6);
    ellipsoid(1, 1, 1);
    pop();
    
    // right wing joint 2
    push();
    fill(255,255,240);
    translate(24, -9, 1);
    rotateZ(-0.5);
    scale(10, 1.5, 6);
    ellipsoid(1, 1, 1);
    pop();
    
    // right wing joint 3
    push();
    fill(112,66,65);
    translate(44, -6, 1);
    rotateZ(0.5);
    scale(16, 1.5, 7);
    ellipsoid(1, 1, 1);
    pop();
    pop();
  }
  
  function createLeadBird() {
    // body
    push();
    fill(139,69,19);
    scale(10, 15, 10);
    ellipsoid(1, 1, 1);
    pop();
    
    
    // NEST HEAD
    
    
    push();
    if (time > 30 && time <= 50) {
      rotateY(-0.7);
    }
    if (time > 50) {
      rotateY(0);
    }
    
    push();
    if (time > 50) {
      rotateX(0.6);
    }
    
    // kneck
    push();
    fill(255,255,240);
    translate(0, -15, 5);
    rotateX(-1.1);
    cylinder(2.5, 15);
    pop();
    
    // head
    push();
    fill(0,128,128);
    translate(0, -20, 12);
    scale(5, 5, 5);
    sphere(1);
    pop();
    
    // beak
    push();
    fill(255,255,0);
    translate(0, -17, 17);
    rotateX(1.2);
    cone(4, 14, 1);
    pop();
    
    // right eye
    push();
    fill(0, 0, 0);
    translate(3, -20, 16);
    sphere(1);
    pop();
    
    // left eye
    push();
    fill(0, 0, 0);
    translate(-3, -20, 16);
    sphere(1);
    pop();
    pop();
    
    pop();
    // end head nest
    
    // left leg
    push();
    fill(255,130,67);
    translate(-4, 15, 5);
    rotateX(1.1);
    scale(2, 10, 2);
    ellipsoid(1, 1, 1);
    pop();
    
    
    // right leg
    push();
    fill(255,130,67);
    // translate[x, y, z]
    translate(4, 15, 5);
    rotateX(1.1);
    scale(2, 10, 2);
    ellipsoid(1, 1, 1);
    pop();
    
    // right foot
    push();
    fill(255,130,67);
    translate(4, 20, 15);
    scale(2.5);
    sphere(1);
    pop();
    
    // left foot
    push();
    fill(255,130,67);
    translate(-4, 20, 15);
    scale(2.5);
    sphere(1);
    pop();
    
    // NEST THE WINGS
    
    // LEFT WING
    push();
    
    if (Math.floor(time)%2 == 0 && time <= 30) {
      rotateZ(-0.5);
    }
    if (Math.floor(time)%2 != 0 && time <= 30) {
      rotateZ(0.5);
    }
    if (time > 30 && time <= 50) {
      rotateZ(-1);
    }
    if (time > 50 && Math.floor(time%2) == 0) {
      rotateZ(-0.5);
    }
    if (time > 50 && Math.floor(time%2) != 0) {
      rotateZ(0.5);
    }
    
    // left wing joint 1
    push();
    fill(169,154,134);
    translate(-10, -5, 0);
    scale(10, 1.5, 6);
    ellipsoid(1, 1, 1);
    pop();
    
    // left wing joint 2
    push();
    fill(255,255,240);
    translate(-24, -9, 1);
    rotateZ(0.5);
    scale(10, 1.5, 6);
    ellipsoid(1, 1, 1);
    pop();
    
    // left wing joint 3
    push();
    fill(112,66,65);
    translate(-44, -6, 1);
    rotateZ(-0.5);
    scale(16, 1.5, 7);
    ellipsoid(1, 1, 1);
    pop();
    
    pop();
    
    if (Math.floor(time)%2 == 0 && time <= 30) {
      rotateZ(0.5);
    }
    if (Math.floor(time)%2 != 0 && time <= 30) {
      rotateZ(-0.5);
    }
    if (time > 30 && time <= 50) {
      rotateZ(1);
    }
    if (time > 50 && Math.floor(time)%2 == 0) {
      rotateZ(0.5);
    }
    if (time > 50 && Math.floor(time)%2 != 0) {
      rotateZ(-0.5);
    }
    
    // RIGHT WING
    push();
    // right wing joint 1
    push();
    fill(169,154,134);
    translate(10, -5, 0);
    scale(10, 1.5, 6);
    ellipsoid(1, 1, 1);
    pop();
    
    // right wing joint 2
    push();
    fill(255,255,240);
    translate(24, -9, 1);
    rotateZ(-0.5);
    scale(10, 1.5, 6);
    ellipsoid(1, 1, 1);
    pop();
    
    // right wing joint 3
    push();
    fill(112,66,65);
    translate(44, -6, 1);
    rotateZ(0.5);
    scale(16, 1.5, 7);
    ellipsoid(1, 1, 1);
    pop();
    pop();
  }
  
  function createFloor() {
    push();
    //texture(grass);
    fill(0,128,0);
    // box([width], [Height], [depth], [detailX], [detailY])
    translate(0, 450, 200);
    box(1200, 10, 1200, 1, 1);
    pop();
  }
  
  push();
  createFloor();
  pop();
  
  function createPerson() {
    //body
    push();
    fill(255, 174, 66);
    box(60, 120, 60, 1, 1);
    pop();
    
    //left arm
    push();
    fill(255,0,0);
    translate(-40, -10, 0);
    box(25, 110, 25, 1, 1);
    pop();
    
    //right arm
    push();
    fill(255,0,0);
    if (time >= 28 && time < 65) {
      rotateX(-1.55);
      translate(0, -30, -50);
    }
    if (time >=65) {
      rotate(0);
    }
    translate(40, -10, 0);
    box(25, 110, 25, 1, 1);
    pop();
    
    //left leg
    push();
    fill(0,0,205);
    translate(-18, 100, 0);
    box(25, 90, 30, 1, 1);
    pop();
    
    //right leg
    push();
    fill(0,0,205);
    translate(18, 100, 0);
    box(25, 90, 30, 1, 1);
    pop();
    
    //right foot
    push();
    fill(255,255,255);
    translate(18, 140, 20);
    box(25, 10, 40, 1, 1);
    pop();
    
    //left foot
    push();
    fill(255,255,255);
    translate(-18, 140, 20);
    box(25, 10, 40, 1, 1);
    pop();
    
    // head and eyes are nested together
    push();
    if (time >= 30 && time <= 50) {
      rotateY(1.2);
    }
    if (time > 50) {
      translate(15, 0, 20);
      rotateX(0.3);
      rotateY(-0.9);
    }
    //head
    push();
    fill(210,180,140);
    translate(0, -90, 0);
    sphere(32);
    pop();
    
    //left eye
    push();
    fill(0, 0, 0);
    translate(-18, -95, 26);
    sphere(5);
    pop();
    
    //right eye
    push();
    fill(0, 0, 0);
    translate(18, -95, 26);
    sphere(5);
    pop();
    pop();
  }
  
  function makeCloud() {
    
    push();
    rotateY(1);
    
    push();
    fill(255,255,255);
    translate(0, -80, 0);
    sphere(32);
    pop();
    
    push();
    fill(255,255,255);
    translate(35, -80, 0);
    sphere(27);
    pop();
    
    push();
    fill(255,255,255);
    translate(-35, -80, 0);
    sphere(27);
    pop();
    
    push();
    fill(255,255,255);
    translate(0, -100, 0);
    sphere(25);
    pop();
    
    push();
    fill(255,255,255);
    translate(60, -80, 0);
    sphere(15);
    pop();
    
    push();
    fill(255,255,255);
    translate(-60, -80, 0);
    sphere(15);
    pop();
    
    push();
    fill(255,255,255);
    translate(30, -100, 0);
    sphere(15);
    pop();
    
    push();
    fill(255,255,255);
    translate(-30, -100, 0);
    sphere(15);
    pop();
  
    pop();
    
  }
  
  // SPAWN THE CLOUDS:
  
  //nest clouds
  push();
  translate(-time*1, 0, time*2);
  
  push();
  translate(0, -200, 0);
  makeCloud();
  pop();
  
  push();
  translate(300, -200, 0);
  scale(1.5);
  makeCloud();
  pop();
  
  push();
  translate(-300, -200, 0);
  scale(1.7);
  makeCloud();
  pop();
  
  push();
  translate(-300, -200, 100);
  makeCloud();
  pop();
  
  push();
  translate(-100, -200, 300);
  makeCloud();
  pop();
  
  push();
  translate(-100, -200, -300);
  scale(1.2);
  makeCloud();
  pop();
  
  push();
  translate(-300, -400, -400);
  scale(2.0);
  makeCloud();
  pop();
  
  pop();
  // end cloud nest
  
  
  function makeTree() {
    //trunk
    push();
    fill(139,69,19);
    cylinder(25, 120, 6);
    pop();
    
    //leaves
    push();
    // nested
    push();
    fill(34,139,34);
    translate(0, -80, 0);
    sphere(32);
    pop();
    
    push();
    fill(34,139,34);
    translate(0, -110, 0);
    sphere(27);
    pop();
    
    push();
    fill(34,139,34);
    translate(30, -80, 0);
    sphere(27);
    pop();
    
    push();
    fill(34,139,34);
    translate(-30, -80, 0);
    sphere(27);
    pop();
    
    push();
    fill(34,139,34);
    translate(0, -80, 30);
    sphere(27);
    pop();
    
    push();
    fill(34,139,34);
    translate(0, -80, -30);
    sphere(27);
    pop();
    
    push();
    fill(34,139,34);
    translate(25, -95, 25);
    sphere(15);
    pop();
    
    push();
    fill(34,139,34);
    translate(-25, -95, 25);
    sphere(15);
    pop();
    
    push();
    fill(34,139,34);
    translate(25, -95, -25);
    sphere(15);
    pop();
    
    push();
    fill(34,139,34);
    translate(-25, -95, -25);
    sphere(15);
    pop();
    
    // end nest
    pop();
  }
  
  // SPAWN THE TREES:
  push();
  translate(0, 390, 0);
  makeTree();
  pop();
  
  push();
  scale(1.5);
  translate(200, 240, 0);
  makeTree();
  pop();
  
  push();
  translate(-200, 390, 0);
  makeTree();
  pop();
  
  push();
  scale(1.5);
  translate(300, 240, 300);
  makeTree();
  pop();
  
  push();
  translate(-500, 390, -50);
  makeTree();
  pop();
  
  push();
  translate(500, 390, 100);
  makeTree();
  pop();
  
  push();
  scale(1.5);
  translate(120, 240, -100);
  makeTree();
  pop();
  
  push();
  translate(200, 390, 200);
  makeTree();
  pop();
  
  push();
  scale(1.5);
  translate(-250, 240, 400);
  makeTree();
  pop();
  
  
  // SPAWN THE PERSON
  push();
  translate(-60, 344, 360);
  scale(0.7);
  rotateY(1);
  createPerson();
  pop();
  
  // center bird
  push();
  if (time <= 10) {
    translate(0, -100, 150);
    translate(0, 0, (time)*10);
  }
  if (time > 10 && time < 30) {
    translate(0, (time-9)*13, (time-9)*16);
  }
  if (time >= 30 && time <= 50) {
    translate(0, 280, 340);
  }
  if (time > 50 ) {
    translate(0, -(time-49)*10, (time-49)*10);
    translate(0, 280, 340);
  }
  createLeadBird();
  pop();
  
  // left bird
  push();
  translate(0, 0, time*10);
  translate(-100, -100, 0);
  createBird();
  pop();
  
  // right bird
  push();
  translate(0, 0, time*10);
  translate(100, -100, 0);
  createBird();
  pop();
  
  // left bird 2
  push();
  translate(0, 0, time*10);
  translate(-200, -100, -150);
  createBird();
  pop();
  
  // right bird 2
  push();
  translate(0, 0, time*10);
  translate(200, -100, -150);
  createBird();
  pop();
  
  // Spawn ending cube:
  if (time > 75) {
    createEndCube();
  }
  
  flapTime += 1;
  
  time += 0.03;  // update the time
}
