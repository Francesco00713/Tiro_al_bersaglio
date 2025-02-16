let diametro = 400;
let centroX, centroY;
let clickX = null, clickY = null;

function setup() {
    createCanvas(1350, 500);
    centroX = width / 2;
    centroY = height / 2;
}

function draw() {
    background(200, 244, 255);
    strokeWeight(2);
    fill(255, 0, 0);
    circle(width / 2, height / 2, diametro);
    fill(255, 255, 255);
    circle(width / 2, height / 2, diametro - 40);
    fill(255, 0, 0);
    circle(width / 2, height / 2, diametro - 80);
    fill(255, 255, 255);
    circle(width / 2, height / 2, diametro - 120);
    fill(255, 0, 0);
    circle(width / 2, height / 2, diametro - 160);
    fill(255, 255, 255);
    circle(width / 2, height / 2, diametro - 200);
    fill(255, 0, 0);
    circle(width / 2, height / 2, diametro - 240);
    fill(255, 255, 255);
    circle(width / 2, height / 2, diametro - 280);
    fill(255, 0, 0);
    circle(width / 2, height / 2, diametro - 320);
    fill(248, 243, 43);
    circle(width / 2, height / 2, diametro - 360);

    if (clickX !== null && clickY !== null) {
        fill(0, 0, 0);
        strokeWeight(2);
        circle(clickX, clickY, 8);
    }
}

function mouseClicked() {
    let distanza = dist(mouseX, mouseY, centroX, centroY);
    if (distanza <= 20) {
        footer = document.querySelector("#footer").innerHTML = "HAI CENTRATO IL BERSAGLIO!";
    } else if (distanza <= diametro / 2) {
        footer = document.querySelector("#footer").innerHTML = "HAI COLPITO IL BERSAGLIO!";
    } else {
        footer = document.querySelector("#footer").innerHTML = "HAI MANCATO IL BERSAGLIO!";
    }
    clickX = mouseX;
    clickY = mouseY;
  }