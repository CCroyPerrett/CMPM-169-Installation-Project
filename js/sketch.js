let video;

function setup() {
  createCanvas(640, 480);
  
  // Start the webcam capture
  video = createCapture(VIDEO);
  
  // Set the resolution of the video
  video.size(640, 480);
  
  // Hide the extra HTML <video> element that p5.js creates by default
  video.hide();
}

function draw() {
  background(220);
  
  // Draw the live webcam frame onto the canvas
  image(video, 0, 0, width, height);
}

