function preload() {

}

function setup() {
   canvas = createCanvas(500, 500);
   canvas.position(525, 200);
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
   video.center();
   video.position(250, 250);
}

function draw() {
    rect(0, 0, 499, 499);
    strokeWeight(5);
    stroke('red');
    rect(6, 6, 487, 487);
    stroke('rgb(0,255,0)');
    strokeWeight(5);
    rect(12, 12, 477, 477);
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5);
    image(video, 100, 100, 300, 300);
}

function take_snapshot() {
    save('framed_image.png');
}