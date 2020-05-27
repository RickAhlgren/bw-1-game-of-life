
let x = [];
let y = [];
// let w = 20;
let cellSize = 20; // new w
let col = [];
let gridWidth = 10; // replaces 10
let numOfCells = gridWidth * gridWidth;
let canvasWidth = cellSize * gridWidth + 25;
let canvasHeight = canvasWidth;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    for (i = 0; i < gridWidth; i++) {
        x[i] = cellSize + i * cellSize;
        y[i] = cellSize + i * cellSize;
    }

    // assign a color for all 100 squares
    for (var i = 0; i < numOfCells; i++) {
		col[i] = true;
    }
    
}

// (j * 10 + i) = row number plus x position
function draw() {
    background(0);
    rectMode(CENTER);
    stroke(0);
    for (j = 0; j < y.length; j++) {
        for (i = 0; i < gridWidth; i++) {
            if (col[j * gridWidth + i]) fill("white");
            else fill("black");
            rect(x[i], y[j], cellSize, cellSize);
        }
    }
}

function mousePressed() {
    for (j = 0; j < gridWidth; j++) {
        for (i = 0; i < gridWidth; i++) {
            let dis = dist(mouseX, mouseY, x[i], y[j]);
			if (dis < cellSize/2) col[j * gridWidth + i] =! col[j * gridWidth + i];
			// console.log("This is dis: ", dis)
        }
    }
}