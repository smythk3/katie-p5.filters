//p5.lowPass();
//p5.bandPass

//.res() Q

//set([freq], [Q])
//10 - 100

//use .connect() and .disconnect()
//example: sound.disconnect();
//sound.connect([name of filter]);
//sound.start();

var sound;
var myFilter;
var cFreq;
var q;


function setup() {
  masterVolume(1);
  createCanvas(800,600);
  
  sound = new p5.Noise('white');
  
  myFilter = new p5.BandPass();
  
  sound.disconnect();
  sound.connect(myFilter);
  sound.start();
  
}

function draw() {
  cFreq = map(mouseX, 0, width, 50, 1000);
  q = map(mouseY, 0 , height, 1000, 1);
  myFilter.set(cFreq, q);
  
  //visualise it!
  background(0);
  fill(125);
  rect(mouseX, 0, (map(mouseY, 0, height, 1, width)), height);
  
}