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
let item1, item2, item3, item4, item5, item6, item7, item8, item9, item10;
let bgImage;

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

function setup() {
  createCanvas(windowWidth, windowHeight);
  // terrain = buildingTerrain(20000); // code that builds the terrain
}

function draw() {
  background(220);

  // if (state === "main") {
  //   mainScreen();
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


function playTheGame() {
  
}

function characterShop() {

}

function inventory() {

}

function settings() {

}