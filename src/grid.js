
// We set the dimensions of the grid by setting the number of columns and rows
let columns = 10;
let rows = 10;

// The size of the cells themselves are hardcoded here in pixels
const cellSize = 10

// Next we calculate the size of the canvas we're printing by taking the desired number of columns & rows and multiplying them by the cell size
const canvasXsize = columns * cellSize
const canvasYsize = rows * cellSize

let colors = [];

// Here we write a function to create a 2-dimensional array based on the desired number of columns & rows
function make2Darray(columns, rows) {
	let arr = new Array(columns);
	for (i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

// This function creates the canvas for the grid based on the number of columns & rows in combination with the desired cell size
// It also calculates a random color for every cell of the grid by storing a random color value in a 2-dimensional array of the same dimensions as the desired grid
function setup() {
	createCanvas(canvasXsize, canvasYsize);
	colors = make2Darray(columns, rows)
	for (i = 0; i < columns; i++) {
		colors[i] = [];
		for (j = 0; j <rows; j++) {
			colors[i][j] = random(255);
		}
	}
}

function draw() {
	// background(0);

	// First, we write a nested for loop to draw a rectangle 
	for (i = 0; i < columns; i++) {
		for (j = 0; j < rows; j++) {
			let x = i * cellSize;
			let y = j * cellSize;
			// fill(255)
			// We use fill() and the colors array we created above in order to paint each cell its randomly generated color
			fill(colors[i][j])
			// We set the stroke() value to be 0 so the lines separating the cells are black
			stroke(0);
			// Then we create each of the squares that comprise the grid
			rect(x, y, cellSize, cellSize);
		}
	}
}


// function mousePressed() {
// 	for (i = 0; i < columns; i++) {
// 		for (j = 0; j < rows; j++) {
// 			let distance = dist(mouseX, mouseY, x[i], y[j]);
// 			if (distance < cellSize/2) col[]
// 		}
// 	}
// }