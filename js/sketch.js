let video; 
let showcamera = false; let showpainting = true;
document.getElementById('showCamera').checked = false;
document.getElementById('showPainting').checked = true;

let redinput = document.getElementById("redbrush");
let blueinput = document.getElementById("bluebrush");
let greeninput = document.getElementById("greenbrush");
let colorwiggleroom = 50;

let colorselect = document.getElementById("colorsel");

function setup() {
  createCanvas(640, 480);
  background(220);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {

  let paintcolor = color(redinput.value, blueinput.value, greeninput.value);
  if(showcamera){
    image(video, 0, 0, width/2, height); 
    translate(width,0); 
    scale(-1.0,1.0);   
    image(video, 0, 0, width, height); 
  }
  else if(showpainting){
    video.loadPixels();
    
    let checksize = 5;
    for (let x = 0; x < video.width; x += checksize) {
      for (let y = 0; y < video.height; y += checksize) {
        let index = (y * video.width + x) * 4;
        
        let r = video.pixels[index];
        let g = video.pixels[index + 1];
        let b = video.pixels[index + 2];
        
        let d = dist(r, g, b, redinput.value, greeninput.value, blueinput.value);
        
        if (d < colorwiggleroom) {
          noStroke();
          fill(r, g, b); 
          ellipse(x, y, checksize, checksize); 
        }
      }
    }
  }
}

function showCamera(){
  showcamera = true;
  showpainting = false;
  document.getElementById('showCamera').checked = true;
  document.getElementById('showPainting').checked = false;
  clear();
  background(220);
}

function showPainting(){
  showcamera = false;
  showpainting = true;
  document.getElementById('showCamera').checked = false;
  document.getElementById('showPainting').checked = true;
  clear();
  background(220);
}

function enforceMaxInput(){
  if (parseInt(this.value) > parseInt(this.max)) {
      this.value = this.max;
    }
}
document.getElementById("redbrush").addEventListener('input', enforceMaxInput);
document.getElementById("bluebrush").addEventListener('input', enforceMaxInput);
document.getElementById("greenbrush").addEventListener('input', enforceMaxInput);


function selectColor(){
  console.log("selected color!")
  switch (colorselect.value){
    case "red":
      redinput.value = 100;
      greeninput.value = 30;
      blueinput.value = 30;
      break;
    case "green":
      redinput.value = 30;
      greeninput.value = 100;
      blueinput.value = 30;
      break;
    case "blue":
      redinput.value = 30;
      greeninput.value = 30;
      blueinput.value = 100;
      break;
    case "yellow":
      redinput.value = 100;
      greeninput.value = 100;
      blueinput.value = 30;
      break;
    case "purple":
      redinput.value = 128;
      greeninput.value = 40;
      blueinput.value = 128;
      break;
  }
}