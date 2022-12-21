// Major Project
// Moiz Naqvi
// November 17, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
// Global code for Terrain
let terrain = [];
let initialPoint = 0;
let stickFigure;
let item1, item2, item3, item4;
let move1, move2, move3, move4;
let wear, wear1, wear2, wear3, wear4, wear5, wear6, wear7, wear8, wear9, wear10, wear11;
let obstacle;
let bgImage;
// Global code for classes
let mouseToggle;
let mouse;

//Class that composes off all the basic coordinates
class BasicCoordinates {
  constructor(x, y, width, height) {
    //position cords
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.mouse;
  }

  //check mouseover
  mouseCheck() {
    this.mouse = mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height;
  }
}

//Extension class responsible for clickable buttons
class Button extends BasicCoordinates {
  constructor(x, y, width, height, clickableText, textSize, textColor, clickable, hoveringShadow) {
    super(x, y, width, height);
    this.clickableText = clickableText;
    this.textColor = textColor;
    this.textSize = textSize;
    this.clickable = clickable;
    this.hoveringShadow = hoveringShadow;
  }

  //function to call to use buttons previously created
  run() {
    this.checkMouse();

    fill(65, 155, 255);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    if(this.mouse) {
      cursor(this.hoveringShadow);
      // image(images.buttonborder2, this.x - this.width * 0.026, this.y - this.height * 0.2, this.width * 1.052, this.height * 1.43);
    }
    else {
      // image(images.buttonborder, this.x - this.width * 0.026, this.y - this.height * 0.2, this.width * 1.052, this.height * 1.43);
    }

    fill(this.textColor);
    strokeWeight(1);
    textSize(this.textSize);
    text(this.buttonText, this.x + this.width / 2, this.y + this.height / 2);

    if(this.mouse && mouseIsPressed && !mouse) {
      mouseToggle = 1;
      this.clickedOn();
    }

    fill(this.textColor);
    strokeWeight(1);
    textSize(this.textSize);
    text(this.clickable, this.x + this.width / 2, this.y + this.height / 2);

    if(this.mouse && mouseIsPressed && !mouse) {
      mouseToggle = 1;
      this.clickable();
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // terrain = buildingTerrain(20000); // code that builds the terrain
}

function draw() {
  

  // if (state === "main") {
  //   mainScreen();
  background(bgImage, width, height);
  // }
  // Allowing the code buildingTerrain(bg) to execute with the help of the following code
  /* 
  if (state === playing) {
    for (let i = initialPoint; i < initialPoint + width+50; i++ ) {
      drawMoutains(i-initialPoint, terrain[i], 50);
    }
    if (keyIsPressed) {
      initialPoint+= 20;
    }
  } 

  if (state === "play") {
    startTheGame();
  }

  if (state === "shop") {
    characterShop();
  }

  if (state === "customizing") {
    inventory();
  }

  if (state === "sounds") {
    settings();
  }
  */
}

function preload() {
  bgImage = loadImage("assets/backgroundimage.jfif");
  obstacle = loadImage("assets/obstacle.png");
  item1 = loadImage("assets/hat1.png");
  item2 = loadImage("assets/jester1.png");
  item3 = loadImage("assets/sword.png");
  item4 = loadImage("assets/shoe1.png");
  move1 = loadImage("assets/character.png");
  move2 = loadImage("assets/character1.png");
  move3 = loadImage("assets/character2.png");
  move4 = loadImage("assets/character3.png");
  wear = loadImage("assets/Character-duplicate.png");
  wear1 = loadImage("assets/full-costume1.png");
  wear2 = loadImage("assets/full-costume2.png");
  wear3 = loadImage("assets/hand1costume.png");
  wear4 = loadImage("assets/hand1costume1.png");
  wear5 = loadImage("assets/hat1.png");
  wear6 = loadImage("assets/hat1costume1.png");
  wear7 = loadImage("assets/hat1costume2.png");
  wear8 = loadImage("assets/hat2costume.png");
  wear9 = loadImage("assets/hat2costume1.png");
  wear10 = loadImage("assets/hat2costume2.png");
  wear11 = loadImage("assets/Shoe1costume.png");
}

// drawing a terrain that would work as a background for the game
function buildingTerrain(bg) {
  let theMoutains = [];
  let time = random(10000);
  for(let i = 0; i < bg; i++) {
    theMoutains.push(noise(time) * height);
    time += 0.01;
  }
  return theMoutains;
}

// Continuing the code required for terrain
function drawMoutains(x, mountainHeight, mountainWidth) {
  let y = height - mountainHeight;
  rect(x, y, mountainWidth, mountainHeight);
  fill("gray");
}

// function mainScreen() {
//   image(bgImage, 0, 0, windowWidth, windowHeight);
//   let gradient = drawingContext.createLinearGradient(width/2.5-200, width/2.5-200, height/2.5+150, height/2.5+200);
//   gradient.addColorStop(0, color(254, 60, 110, 65));
//   gradient.addColorStop(1, color(172, 60, 110, 65));
//   rect(width/2.5, height/2.5, 250, 150, 20);
//   stroke(255);
//   strokeWeight(1);

//   if (mouseInsideRect(windowWidth/2.5, windowWidth/2.5+250, windowHeight/2.5, windowHeight/2.5+150)) {
//     drawingContext.strokeStyle = gradient;
//     textSize(50);
//     text("START", width/2.1, height/1.95,);
//     textFont("Georgia");

function allPressableButtons() {

}

function playTheGame() {
  
}

function characterShop() {

}

function inventory() {

}

function settings() {

}