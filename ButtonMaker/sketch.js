let canvas
let hi
let buttonMaker
let button
let small
let medium
let large
let prompt1
let prompt2
let pm
let cm
let th
let prompt3
let red
let green
let blue
let prompt4
let wav
let vid
let prompt5a
let mtn
let bug
let frc
let prompt5c
let scr
let mew
let rim
let col1
let col2
let col3
let buttxt
let next
let buttonSize
let buttonContent
let buttonColor
let finbut
let img1
let img2
let img3
let wav1
let wav2
let wav3
let imgfil
let wavfil

function preload() {
  img1 = loadImage("1_yweiw7AyafIdk0YKt4G03Q.jpg")
  img2 = loadImage("DCNBsJT.jpg")
  img3 = loadImage("d7wi24v-87171ed8-f431-4a23-973d-fb4ae30b6ba2.jpg")
   wav1 = loadSound("gfgf.wav")
   wav2 = loadSound("fgsdg.wav")
   wav3 = loadSound("dssfv.wav")
}
  
function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0,0);
 
  col1 = color(255,0,0)
  col2 = color(0,255,0)
  col3 = color(0,0,255)
  
  hi = createP("Hi there. Isn't it terrifying that 99% of the information you're agonizing over will be of absolutely no use to you? I bet if I sat you down and told you to make me a button in a web browser, you'd start to cry. Well no more. We're going to teach you to make your very own functioning button! It's just gonna look like some text, though. Give us your name and we'll be off.");
  buttonMaker = createInput("");
  
  background(200,100,125);
  button = createButton("Save me from obsolescence")
  button.position(160, 105);
  button.mousePressed(process);
  
}

function process(){
  hi.hide();
  buttonMaker.hide();
  button.hide();
 prompt1 = createP("Hey " + buttonMaker.value() + ", you nerd. Let's get started. What size should the button be?");
 small = createButton("Small");
  small.mousePressed(step2, buttonSize = [100,50]);
 medium = createButton("Medium");
  medium.mousePressed(step2, buttonSize = [200,100]);
  large = createButton("Large");
  large.mousePressed(step2, buttonSize = [400,200]);
}

function step2(){
  prompt1.hide();
  small.hide();
  medium.hide();
  large.hide();
  prompt2 = createP("Nice job " + buttonMaker.value() + ", I've never done this sort of coding before, and it took me four days to figure out how to make that simple operation work, because I cling so desperately to the whole 'smart kid' thing that defined my youth, that I have an enormous problem asking for help. Moving on though. What do you want your button to say?")
  buttxt = createInput("")
  next = createButton("Next");
  next.mousePressed(step3);
  
}

function step3(){
  prompt2.hide();
  buttxt.hide();
  next.hide();
  buttonContent = buttxt.value();
  prompt3 = createP("Gotcha, we'll take care of that. What color should your button be?");
   red = createButton("Red");
  red.mousePressed(step4, buttonColor = col1);
 green = createButton("Green");
  green.mousePressed(step4, buttonColor = col2);
  blue = createButton("Blue");
  blue.mousePressed(step4, buttonColor = col3);
}

function step4(){
  prompt3.hide();
  red.hide();
  blue.hide();
  green.hide();
  prompt4 = createP("Alright, cool. Now, what should this button thing DO?");
   pic = createButton("Show a picture!");
  pic.mousePressed(step5a);
 wav = createButton("Make a noise!");
  wav.mousePressed(step5b);
  vid = createButton("Change the background color!");
  vid.mousePressed(finc);
}

function step5a(){
  prompt4.hide();
  pic.hide();
  wav.hide();
  vid.hide();
  prompt5a = createP("Nice, cool, easy. Show a picture of what?");
   mtn = createButton("A Mountain town!");
  mtn.mousePressed(fina, imgfil = img1);
 bug = createButton("A cool bug!");
  bug.mousePressed(fina, imgfil = img2);
  frc = createButton("A weird fractal!");
  frc.mousePressed(fina, imgfil = img3);
}

function step5b(){
  prompt4.hide();
  pic.hide();
  wav.hide();
  vid.hide();
  prompt5b = createP("Alright, no prob, you picked one of the easy ones. What noise should it make?");
   scr = createButton("A scream!");
  scr.mousePressed(finb, wavfil = wav1);
 mew = createButton("A meow!");
  mew.mousePressed(finb, wavfil = wav2);
  rim = createButton("A single drum beat!");
  rim.mousePressed(finb, wavfil = wav3);
}

function fina(){
  background(125,125,0);
  prompt5a.hide();
  mtn.hide();
  bug.hide();
  frc.hide();
  createP("Here you go. Proud of you.");
    finbut = createButton(buttonContent)
  finbut.size(buttonSize[0], buttonSize[1]);
  finbut.style('background-color', buttonColor)
  finbut.mousePressed(imgfil.show());
}


function finb(){
  background(125,125,0);
  prompt5b.hide();
  scr.hide();
  mew.hide();
  rim.hide();
  createP("Here you go. Proud of you.");
    finbut = createButton(buttonContent)
  finbut.size(buttonSize[0], buttonSize[1]);
  finbut.style('background-color', buttonColor)
  finbut.mousePressed(wavfil.play);
  }

function finc(){
  background(125,125,0);
  prompt5c.hide();
  mem.hide();
  com.hide();
  cut.hide();
  finbut = createButton(buttonContent)
  finbut.size(buttonSize[0], buttonSize[1]);
  finbut.style('background-color', buttonColor)
  finbut.mousePressed(background(random(255),random(255),random(255)));
  }

function draw(){

}
  