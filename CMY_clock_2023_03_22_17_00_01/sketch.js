function setup() {
  let canvas = createCanvas(500, 500);
  frameRate(2);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  noStroke();
  translate(50, 50)
  base();
  clockHours();
  clockMinutes();
  clockSeconds();
}

//add white base
function base() {
  fill(255, 225, 225);
  rect(0, 0, 400, 400);
}

//create arrays for color components
let secondColors = [255, 0, 255]; //magenta
let minuteColors = [0, 255, 255]; //cyan
let hourColors = [255, 255, 0];   //yellow



//switch colors and return a new array
function change(colorArray) {
  if (colorArray[0] == 255 && colorArray[1] == 0 && colorArray[2] == 255) {
    return [0, 255, 255];
  } else if (colorArray[0] == 0 && colorArray[1] == 255 && colorArray[2] == 255) {
    return[255, 255, 0];
  } else {
    return [255, 0, 255];
  }
}

//when mouse is clicked, change current colors with new colors
function mouseClicked() {
  secondColors = change(secondColors);
  minuteColors = change(minuteColors);
  hourColors = change(hourColors);
  return false;
}


//increment functions
function clockSeconds() {
  let s = second();
  let space = 0;
  space = (s / 60) * 400;
  
  // default magenta
  fill(secondColors[0], secondColors[1], secondColors[2], 140);
  rect(0, 0, space, space);
}

function clockMinutes() {
  let m = minute();
  let space = 0;
  space = m / 59 * 400;
  
  // default cyan
  fill(minuteColors[0], minuteColors[1], minuteColors[2], 180);
  rect(0, 0, 400, space);
}

function clockHours() {
  h = hour();
  let space = 0;
  if (h == 0 || h == 12) { 
    space = 0;
  } else if (h < 12){
    space = h / 11 * 400;
  } else {
    space = (h - 12) / 11 * 400;
  }
  // default yellow
  fill(hourColors[0], hourColors[1], hourColors[2], 255);
  rect(0, 0, space, 400);
}

