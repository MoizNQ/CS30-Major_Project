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
let move2, move1;
let wear, wear1, wear2, wear3, wear4, wear5, wear6, wear7, wear8, wear9, wear10, wear11;
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
  // terrain = buildingTerrain(20000); // code that builds the terrain
}

function draw() {
  showCursor();
  
  // if (state === "main") {
  //   mainScreen();
  background(bgImage, width, height);
  move2(100, 100, 5);
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
  move2 = loadAnimation("assets/character1.png", "assets/character1a.png", "assets/character1b.png");
  move2.delay = 10;
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
  backButton = loadImage("assets/back-button.png");
}

function showCursor() {
  cursor("assets/newPointer.png");
}

function createButtons() {
  playButton = new Button(width * 0.9, height * 0.1, width * 0.06, height * 0.06, settings, "assets/play.png");
  settingsButton = new Button(width * 0.9, height * 0.1, width * 0.06, height * 0.06, playTheGame, "assets/settings.png");
  inventoryButton = new Button(width * 0.9, height * 0.1, width * 0.06, height * 0.06, inventory, "assets/inventory.png");
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

// function spawnObstacles(){
//   if (frameCount % 60 === 0){
//     let obstacle = createWriter(600,165,10,40);
//     obstacle.velocityX = -(6 + score/100);
          
//     //generate random obstacles
//     let rand = Math.round(random(1,6));
    
//     switch(rand) {
//     case 1: obstacle.addImage(obstacle);
//       break;
//     case 2: obstacle.addImage(obstacle);
//       break;
//     case 3: obstacle.addImage(obstacle);
//       break;
//     case 4: obstacle.addImage(obstacle);
//       break;
//     case 5: obstacle.addImage(obstacle);
//       break;
//     case 6: obstacle.addImage(obstacle);
//       break;
              
//     default: break;
   
//     }
    
//     //assign scale and lifetime to the obstacle           
//     obstacle.scale = 0.3;
//     obstacle.lifetime = 300;
    
//     //add each obstacle to the group
//     obstaclesGroup.add(obstacle);
      
//   }
// }

function playTheGame() {
  state = "game";
}

function mainMenu() {
  state = "menu";
}

function inventory() {
  state = "Assets";
}

function settings() {
  state = "functions";
}