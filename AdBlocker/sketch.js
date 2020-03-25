let timer = 6000
let bg
let adv
function setup() {
  bg = loadImage("1_yweiw7AyafIdk0YKt4G03Q.jpg");
  createCanvas(windowWidth, windowHeight);
}

function ad() {
  adv =createButton('buy some trash')
  adv.position(random(windowWidth), random(windowHeight))
  adv.size(random(100,200), random(100,200))
  adv.mousePressed(adv.hide)

}




function draw() {
  background(bg);
    if (frameCount % 8 == 0 && timer > 0) { ad()
  }
}
