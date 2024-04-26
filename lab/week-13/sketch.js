function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    var sky = color(147,193,245);
    var skyH = windowHeight/2.5;
    var grassH = skyH*2;

    background(220);
    noStroke();
    fill(sky);
    rect(0,0,windowWidth,skyH);
    fill(49,242,11);
    rect(0,skyH,windowWidth,grassH);

    fill(156, 69, 59);
    triangle(40,225,290,60,500,225);
    fill(219, 209, 208);
    square(90,225,350,);
    fill(156, 69, 59);
    square(190,475,100,);
  }