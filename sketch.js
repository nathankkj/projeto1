function setup() {
    createCanvas(1000, 1000);
    background(color(100, 0 ,0));
    cor = color(random(255), random(255), random(255));
    circuloX = [0, 0, 0];
    circuloY = [random(height), random(height), random(height)];
      for(let contador in circuloX) {
    circle(circuloX, circuloY[contador], 50);
    circuloX+= random(0, 3);
    circuloY+= random(-3, 3);
    if(circuloX >= width) {
    circuloX = 0;
    
     }
     }
    circuloY= random(height);
    }
    
    function draw() {
    fill(cor);
    for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);
    circuloX[contador]+= random(0, 3);
    circuloY[contador]+= random(-3, 3);  }
    if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));  }
    }
    
    function setup() {
    createCanvas(1000, 1000);
    background(color(100, 0 ,0));
    cor = color(random(255), random(255),  
    random(255));
    circuloX = [0, 0];
    circuloY = [random(height), random(height)]; }
    
    function setup() {
    createCanvas(800, 800);
    background(color(100, 0 ,0));
    cor = color(random(255), random(255), random(255));
    circuloX = [0, 0, 0];
    circuloY = [random(height), random(height), random(height)];
    }