let sunRadius = 30;
let planetRadii = [8, 12, 16, 20, 24]; 
let distances = [80, 120, 160, 200, 240]; 
let ovalFactor = 0.6; 
let rotationSpeeds = [0.5, 0.7, 0.6, 0.4, 0.3];
let planetColors = ["red", "blue", "green", "brown", "purple"];

function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(0);

    // Desenare soare
    fill("yellow");
    ellipse(width / 2, height / 2, sunRadius * 2);

    // Desenare orbite ovale si planete pe orbite
    for (let i = 0; i < distances.length; i++) {
        let ovalWidth = distances[i] * 2;
        let ovalHeight = distances[i] * 2 * ovalFactor;
        
        // Desenare orbite
        noFill();
        stroke(255, 150);
        ellipse(width / 2, height / 2, ovalWidth, ovalHeight);
        
        // Desenare planete
        let angle = map(frameCount * rotationSpeeds[i] % 360, 0, 360, 0, TWO_PI); // Calculează unghiul pentru poziția planetei
        let planetX = width / 2 + ovalWidth / 2 * cos(angle);
        let planetY = height / 2 + ovalHeight / 2 * sin(angle);
        
        fill(planetColors[i]);
        ellipse(planetX, planetY, planetRadii[i] * 2);
      }
  }
