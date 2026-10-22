let video; 
let showcamera = false;

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  background(220);
  if(showcamera){
    image(video, 0, 0, width/2, height); 
    translate(width,0); 
    scale(-1.0,1.0);   
    image(video, 0, 0, width, height); 
  }
}

function showCamera(){
  showcamera = !showcamera;
}

