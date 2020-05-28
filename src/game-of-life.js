// This function creates a 2 dimensional array, otherwise known as an array of arrays, to represent the column-and-row structure of a grid
// [
// [1, 2, 3],
// [7, 8, 9],
// [4, 5, 6]
// ]
//
function makeArrayOfArrays(columns, rows) {
  let array = new Array(columns);
  // console.log("This is array(columns): ", array);
  for (i = 0; i < array.length; i++) {
    array[i] = new Array(rows);
  }
  // console.log("This is array(columns) with array(rows): ", array);
  return array;
}

// Here we set the grid variable to exist and determine how large we want the cells to be
// Since we are assuming the cells are squares, we just set the width and use it for the width and height
let grid;
let columns;
let rows;
let cellWidth = 10; // width in pixels

function setup() {
  createCanvas(400, 400);

  // We dynamically set the number of columns and rows by dividing the width and height of the canvas by the cellWidth, and then use the makeArrayOfArrays() function to create a grid that fits out canvas
  let columns = width / cellWidth;
  let rows = height / cellWidth;
  let grid = makeArrayOfArrays(columns, rows);
  for (i = 0; i < columns; i++) {
    for (j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

// Here we use the draww function to create the grid based on the desired cell size, and if the cell has a value of 1 in it, we make it white
function draw() {
  background(0);

  for (i = 0; i < columns; i++) {
    for (j = 0; j < rows; j++) {
      let x = i * cellWidth;
      let y = j * cellWidth;
      if (grid[i][j] == 1) {
        // If the value of the cell is 1, then we color the cell white and change the color of its borders to white as well, removing the grid lines
        fill(255);
        stroke(255);
        rect(x, y, cellWidth, cellWidth);
      }
    }
  }

//   // We need an array representing the next generation to swap with the current generation
//   let nextGenGrid = makeArrayOfArrays(columns, rows);

//   // Here we want to compute the next generation based on the state of the current generation by looping through all the cells to determine how many neighbors each one has at present
//   for (i = 0; i < columns; i++) {
//     for (j = 0; j < rows; j++) {
//       // We create a variable to track the value of the cell we're looking at
//       let cellValue = grid[i][j];

//       // "Edge" case - this if statement allows us to treat the edges as if they are static until we implement the ability for the cells to wrap around to the other side
//       if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
//         nextGenGrid[i][j] = cellValue;
//       } else {
//         // We count the number of live neighbors each cell has as we go through the loops
//         let neighbors = countNeighbors(grid, i, j);

//         // Here we set the rules for the game of life
//         // Rule 1: Each dead cell adjacent to exactly 3 live neighbors will become live in the next generation
//         if (cellValue == 0 && neighbors == 3) {
//           nextGenGrid[i][j] = 1;
//         }

//         // Rule 2: Each live cell with one or fewer live neighbors will die in the next generation
//         else if (cellValue == 1 && neighbors <= 1) {
//           nextGenGrid[i][j] = 0;
//         }

//         // Rule 3: Each live cell with 4 or more live neighbors will die in the next generation
//         else if (cellValue == 1 && neighbors >= 4) {
//           nextGenGrid[i][j] = 0;
//         }

//         // Rule 4: Each live cell with 2 or 3 live neighbors will remain alive for the the next generation.
//         // Since nothing is changing with this rule, this is just the else statement
//         else {
//           nextGenGrid[i][j] = cellValue;
//         }
//       }
//     }
//   }
}

// This function loops through the cells surrounding each cell
function countNeighbors(grid, x, y) {
  for (i = -1; i < 2; i++) {
    for (j = -1; j < 2; j++) {
      if (i == x && j == y) {
        sumOfNeighbors += 0;
      } else {
        sumOfNeighbors += grid[x + i][y + j];
      }
    }
  }
  return sumOfNeighbors;
}
