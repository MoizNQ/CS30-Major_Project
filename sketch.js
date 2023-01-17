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
let moveMents;
let obstacle;
let bgImage;
let newCursor;
// Global code for classes
let mouseToggle;
let mouse;
let pressTheButton, backButton;
let inventoryButton;
let settingsButton;
let playButton;
let PLAY = 1;
let RETRY = 0;
let gameState = PLAY;
let jump, bgmusic, soundeff;
let sOn, sOff;

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
  constructor(x, y, width, height, clickable) {
    super(x, y, width, height);
    this.clickable = clickable;
  }

  //function to call to use buttons previously created
  run() {
    this.mouseCheck();
    if(this.mouse && mouseIsPressed && !mouse) {
      mouseToggle = 1;
      this.clickable();
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createButtons();
  moveMents.addAnimation;
  // terrain = buildingTerrain(20000); // code that builds the terrain
}

function draw() {
  showCursor();
  background(bgImage, width, height);
  // Allowing the code buildingTerrain(bg) to execute with the help of the following code

  if (state === "game") {
    playTheGame();
    for (let i = initialPoint; i < initialPoint + width+50; i++ ) {
      drawMoutains(i-initialPoint, terrain[i], 50);
    }
    if (keyIsPressed) {
      initialPoint+= 20;
    }
  }

  if (state === "functions") {
    settings();
  }
  
  if (state === "menu") {
    mainMenu();
  }
}

function preload() {
  soundeff = loadSound("assets/click.mp3");
  jump = loadSound("assets/jump.mp3");
  bgmusic = loadSound("running.mp3");
  bgImage = loadImage("assets/backgroundimage.jfif");
  moveMents = loadAnimation("assets/character1.png", "assets/character1a.png", "assets/character1b.png");
  moveMents.framDelay = 10;
  backButton = loadImage("assets/back-button.png");
  sOn = loadImage("assets/noSound.png");
  sOff = loadImage("assets/yesSound.png");
}

function showCursor() {
  cursor("assets/newPointer.png");
}

function createButtons() {
  playButton = new Button(width * 0.9, height * 0.1, width * 0.06, height * 0.06, settings, "assets/play.png");
  settingsButton = new Button(width * 0.9, height * 0.1, width * 0.06, height * 0.06, playTheGame, "assets/settings.png");
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

function playTheGame() {
  state = "game";
  bgmusic.play();
  bgmusic.loop();

}

function mainMenu() {
  state = "menu";
  if (mousePressed(mouseX, mouseY)) {
    soundeff.play();
  }
}

function settings() {
  state = "functions";
}