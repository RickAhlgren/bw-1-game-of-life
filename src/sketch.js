function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let cols;
let rows;
let resolution = 5;

function setup() {
    frameRate(10)
    createCanvas(400, 400);
    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols, rows);
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }

    createP('')
    startButton = createButton("Start");
    startButton.mousePressed(startLoop)
    stopButton = createButton("Stop")
    stopButton.mousePressed(stopLoop)
    
}

function startLoop() {
    loop()
}

function stopLoop() {
    noLoop()
}

function draw() {
    background(255);

    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(0);
                stroke(0);
                rect(x, y, resolution, resolution);
            }
        }
    }

    let next = make2DArray(cols, rows);

    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            let state = grid[i][j];

            // Now we count the live neighbors of each cell
            let neighbors = countNeighbors(grid, i, j);

            if (state == 0 && neighbors == 3) {
                next[i][j] = 1;
            } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] = 0;
            } else {
                next[i][j] = state;
            }
        }
    }

    grid = next;
}

// function countNeighbors(grid, x, y) {
//     let sum = 0;
//     for (i = -1; i < 2; i++) {
//         for (j = -1; j < 2; j++) {
//             sum += grid[x+i][y+j];
//         }
//     }
//     sum -= grid[x][y];
//     return sum
// }

// function countNeighbors(grid, x, y) {
//     let sum;
//     for (i = -1; i < 2; i++) {
//         for (j = -1; j < 2; j++) {
//             sum += grid[x + i][y + j];
//         }
//     }

//     sum -= grid[x][y];
// }

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}
