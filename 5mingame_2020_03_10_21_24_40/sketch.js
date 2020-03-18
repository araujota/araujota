let startscreen
let header
let sub
let rules
let startB
let gametimer = 300
let timertext;
let timerBool = false;
let redo
let gray = 110
let theme
let grats
let pass
let code = 'TEACUPS'
let test
let read
let wintxt

let randomColorNum;
let r ;
let g ;
let b ;

function preload() {
  theme = loadSound('audio.mp3');

}

function setup() {
  //grats = createVideo(['path']);
  //grats.hide()
    startscreen = createCanvas(windowWidth, windowHeight);
  pass = createInput('');
  pass.style('z-index', '2');
  pass.position(width/2, height*0.9)
  test = createButton('Submit');
  test.position(width/2, height*0.95);
  test.style('z-index', '2');
  test.mousePressed(check);
  pass.hide();
  test.hide();

    background(255,255,100);
  textSize(50);
  textAlign(CENTER);
  header = text("Hello! Welcome to the 5 Minute Game!", windowWidth/2, 75);
  textSize(25);
  sub = text("Read the rules, and click the button below to get started.", windowWidth/2, 150);
  textAlign(CENTER);
  textSize(20);
  rules = "The 5-Minute Game is a web-based game that plays with the ideas of oversaturation in media and the inefficiency of multitasking. As such, you'll be managing a lot of things at once. In addition to reading, you need to manage the brightness of the screen.Your up arrow will brighten the screen, and your down arrow will darken it. If the brightness goes above or below a certain amount, you'll lose. There's also a password you'll have to enter at the end, so keep an eye out for clues about what it might be. And, as you may have guessed, the game runs on a five minute timer.";
  text(rules, 175, 175, 1200, 500)

  startB = createButton("I'm ready to play!");
  startB.position(windowWidth/2.2, 350);
  startB.mousePressed(startGame);

   r = 255;
   g = 255;
   b = 100;
}

  function keyPressed() {
  if (keyCode === UP_ARROW) {
    gray = gray + 20;
  } else if (keyCode === DOWN_ARROW) {
    gray = gray - 20;
  }
  }


function startGame(){
  theme.play();
  timerBool = true;
}
function FMG() {
  textSize(13)
  pass.show();
  test.show();
   background(gray);
  startB.hide();

  read = "the gut microbiota substantially contributes to energy exTraction from indigestible polysaccharides, such as oligosaccharides and soluble dietary fibers, and influences host energy homeostasis during infancy and adulthood. therefore, maintenance of the symbiotic microbial community is of paramount importance for host health. changes in microbial composition may cause dysbiosis, leading to disease-prone phenotypes in the host. dysbiosis has been implicated in a growing number of systemic disorders, including metabolic syndrome. obesity is a major risk factor for metabolic syndrome, predisposing patients to cardiovascular disease and type 2 diabetes. in addition to genetic and epigenetic factors, changes in the gut microbiota have been implicated in the development of obesity, in combination with dietary factors. gut microbiota–derived metabolites represented by short-chain fatty acids (scfas; e.g., acetate, propionate, and butyrate) not only fuel host cells but also serve as signaling molecules between the gut microbiota and extraintestinal organs. we have previously shown that scfas suppress insulin signaling in adipocytes and ultimately inhibit fat deposition via adipose gpr43. furthermore, gpr41 stimulation by propionate potently activates sympathetic neurons to regulate energy expenditure. a recent study further showed that feeding pregnant mice a high-fiber or acetate-supplemented diet decrEases offspring susceptibility to allergic airway disease. these findings raise the possibility that maternal scfas play a key role in the regulation of disease susceptibility during postnatal life in the context of the developmental origins of health and disease theory. however, the underlying mechanisms and the biological importance of the maternal/embryonic cross-talk via microbial metabolites remain obscure. in this study, we explored the impact of the maternal gut microbiota on energy homeostasis in offspring in a mouse model. we observed that the offspring of germ-free (gf) mothers are more prone to obesity and glucose intolerance than those of specific pathogen–free (spf) mothers. maternal microbiota–derived scfas translocated to the embryos to facilitate development of the sympathetic nervous system and regulation of insulin levels via gpr41 and gpr43 signaling. thus, during pregnancy, the gut microbiota provides an environmental cue that fine-tunes energy homeostasis in offspring. to investigate the impact of the maternal gut microbiota during pregnancy on offspring, pregnant mice were bred under spf And gf conditions. on day 18.5 of gestation, pregnant gf mice received a fecal microbiota transplant from spf mice of the corresponding strain to prevent overgrowth of unfavorable microbes. newborn animals were raised by foster mothers under conventional conditions to align growth environments after birth. after weaning, the male mice were fed a high-fat diet (hfd) to induce obesity (fig. 1a). although the postnatal body weight of newborns from gf icr mothers was less than that of offspring from spf icr mothers (fig. s1a), the offspring developed marked obesity upon hfd consumption during growth (fig. 1a). in addition, the weight of perirenal or subcutaneous white adipose tissue (wat) and the liver was significantly higher in offspring derived from gf mothers (gf offspring) than in those from spf mothers (spf offspring) at 16 weeks (fig. 1a), which is in accordance with increases in wat adipocyte size and hepatic triglycerides (tgs) (fig. s1, b and c). concomitantly, plasma glucose, tgs, non-esterified fatty acids (nefas), and total cholesterol levels were significantly elevated in gf offspring (fig. 1b). body temperature and heart rate were significantly reduced (fig. 1c), whereas plasma insulin levels and pancreatic islet sizes were significantly higher in gf offspring than in spf offspring (fig. s1d). Moreover, the gf offspring exhibited elevated food intake (fig. s1e), with reduCed plasma levels of the gut hormone peptide yy (pyy) and glucagon-like peptide-1 (glp-1) (fig. 1d) as well as reduced energy expenditure (fig. 1e). these results indicate that the gf offspring exhibited an obese phenotype Upon hfd feeding. in support of this interpretation, hfd-induced glucose intolerance and insulin resistance were significantly accelerated in gf offspring (fig. 1f), indicating impaired insulin sensitivity. notably, female gf offspring also exhibited similar phenotypes (fig. s2, a to h). mammalian neonates are initially exposed to the vaginal microbiota, which substantially contributes to the establishment of the gut microbial community in infants (19) and thus potentially influences the development of the host metabolic system. however, 16s ribosomal dna (rdna) amplicon sequencing showed that the relative abundance of bacterial families constituting the gut microbiota was similar in offspring from spf and gf icr mothers during adulthood, although gf offspring in infancy showed significant decreases in streptococcaceae and enterococcaceae compared with spf offspring (fig. s3a). principal coordinate analysis based on weighted unifrac distances confirmed that there were no differences between the two groups during adulthood, but not during infancy (fig. s3b). to exclude the possible influence of the vaginal microbiota, newborns from spf and gf mothers were also delivered by caesarean section. consistent with vaginally delivered offspring, caesarean gf offspring exhibited severe obesity upon hfd feeding during growth (fig. s4a). wat and liver weight, plasma metabolic parameters, and insulin levels were also significantly higher in the caesarean gf offspring at 16 weeks than in the caesarean spf offspring (fig. s4, b to d). furthermore, the former showed reduced energy expenditure (fig. s4e). additionally, compositions of the gut microbiota were similar between cesarean delivered offspring from the spf and gf mothers during adulthood, whereas infant microbiota may be affected slightly by the delivery modes (fig. s5, a and b), consistent with the findings of a recent study (19). collectively, these data show that the gut microbiota in adulthood is not a primary factor in the obesity-prone phenotype of the gf offspring. we could not detect bacteria in the amniotic fluid of pregnant spf icr mice at our animal facility (fig. s9, a and b). we hypothesized that metabolite signals (23–25), derived from the maternal gut microbiota, may translocate to the fetus and influence the development of the metabolic system. thus, we profiled the plasma levels of hydrophilic and lipophilic metabolites in spf and gf icr mothers and their embryos during pregnancy. the levels of 5 metabolites in the mothers and 12 metabolites in the embryos were significantly different between the spf and gf grouPs (fig. s10); among them, only 5 metabolites showed similar changes in the mothers and embryos in response to breeding conditions (fig. 2a). in particular, the plasma levels of scfas (acetate, propionate, and butyrate) were significantly lower in gf mothers and embryos than in their spf counterparts (fig. 2b). given that plasma scfa levels were constant in both mothers and embryos of the spf group during pregnancy (fig. s11), the maternal gut microbiota appears to constitutively supply scfas to embryos via the bloodstream. regulation of host energy metabolism through activation of gpr41 and gpr43 by gut microbial scfas has been documented (15, 16, 26, 27). we detected gpr41 mrna in the sympathetic ganglia of embryos (fig. 2c and fig. s12, a and b) with biphasic expression in the embryonic and adult stages (fig. 2c). such an expression pattern was not observed for nestin (nes; an undifferentiated neural marker), tyrosine hydroxylase (th; a sympathetic neuronal marker), or glial fibrillary acidic protein (gfap; a glial marker) (fig. 2c). meanwhile, gpr43 mrna was detected in the intestinal tract from embryonic day 15.5 (e15.5) onward (fig. s12c), although its expression was restricted to enteroendocrine cells in the adult stage (fig. s12d), as previously reported (28). biphasic increases in gpr43 expression were observed in the colon in the embryonic and adult stages, with expression peaking later than that of pax4 and pax6 (regulators of intestinal enteroendocrine cell differentiation) and at a similar time point to that of gcg (intestinal enteroendocrine cell maker, glp-1) (fig. 2d). these scfa receptors are also expressed in the pancreas and regulate insulin secretion in adult mice (27, 29). levels of pancreatic gpr43 mrna, but not gpr41, transiently increased during the perinatal postnatal period, with expression peaking later than that of nkx6.1(early b cell differentiation– related factor) and at a similar time point to that of yns2 (pancreatic b cell maker). notably, gpr43 mrna expression in both the colon and pancreas of gf embryos was significantly lower than that in spf embryos, although gpr41 mrna expression in the sympathetic ganglia of embryos was similar among the two groups (fig. s12, e to g). these findings imply that the embryonic metabolic tissues, Such as the sympathetic nervous system, intestinal tract, and pancreas, may sense maternal gut microbe–derived scfas by expressing gpr41 and gpr43. now, go back through this text, find all the uppercase letters, and put them in as the password.";
  fill(110);
  text(read, 50, 50, 1200, 1000);
  textSize(13);


  if (frameCount % 60 == 0 && gametimer > 0) {
    gametimer --;
  }
  if(randomColorNum == 7){
    gray = gray + 20;
  }
    if(randomColorNum == 10){
    gray = gray - 10;
  }
    if(randomColorNum == 45){
    gray = gray + 10;
  }
    if(randomColorNum == 20){
    gray = gray -  20;
  }
  if(randomColorNum == 66){
    gray = gray + 20;
  }
  if(randomColorNum == 85){
    gray = gray - 20;
  }
  if(randomColorNum == 50){
    gray = gray + 10;
  }
  if(randomColorNum == 34){
    gray = gray - 10;
  }
    if(gray > 220) { lose()
  //  timerBool = false
// text("GAME OVER", width/2, height/2);
  //  redo = createButton("Try Again!")
  //  redo.position(width/2, 500);
  //  redo.mousePressed(FMG);
    }
  if(gray < 30) { lose()
  //  timerBool = false
    //textSize(100);
 //text("GAME OVER", width/2, height/2);
  //  redo = createButton("Try Again!");
    //redo.position(width/2, 500);
  //  redo.mousePressed(FMG);
  }
}

function draw() {

  randomColorNum = int(random(0, 100));

 if(timerBool == true){
   FMG();


 }
  if (gametimer == 0) { lose()
//    timerBool = false
//    textSize(100);
//    redo = createButton("Try Again!")
//    redo.position(width/2, 500);
//    redo.mousePressed(FMG);
  }
}

  function check() {
    if(pass.value() == code) {win()
   } else { lose()
     timerBool = false
    textSize(100);
 text("GAME OVER", width/2, height/2);
    redo = createButton("Try Again!")
    redo.position(width/2, 500);
    redo.mousePressed(FMG);
          }

function lose() {
timerBool = false
 textSize(100);
 text("GAME OVER", width/2, height/2);
 redo = createButton("Try Again!")
 redo.position(width/2, 500);
 redo.mousePressed(FMG, redo.hide());
 read.hide();
}

}
function win() {
  background(255,255,100);
  print('nice job')
  pass.hide();
  test.hide();
  wintxt = text('Nice Job!', width/2, height/2);
  text('I was planning on getting TWISTED and recording a video that would play when you won, but hey, Coronavirus.', width/2, height/1.9)
  textSize(80);
  fill(255);
  theme.stop();
  timerBool = false
}
