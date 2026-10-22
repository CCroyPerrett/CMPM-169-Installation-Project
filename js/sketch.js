let video; 
let showcamera = false; let showpainting = true;
document.getElementById('showCamera').checked = false;
document.getElementById('showPainting').checked = true;

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
  else if(showpainting){

  }
}

function showCamera(){
  showcamera = true;
  showpainting = false;
  document.getElementById('showCamera').checked = true;
  document.getElementById('showPainting').checked = false;
}

function showPainting(){
  showcamera = false;
  showpainting = true;
  document.getElementById('showCamera').checked = false;
  document.getElementById('showPainting').checked = true;
}

function enforceMaxInput(){
  if (parseInt(this.value) > parseInt(this.max)) {
      this.value = this.max;
    }
}
document.getElementById("redbrush").addEventListener('input', enforceMaxInput);
document.getElementById("bluebrush").addEventListener('input', enforceMaxInput);
document.getElementById("greenbrush").addEventListener('input', enforceMaxInput);


