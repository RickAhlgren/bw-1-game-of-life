


function makeArrayOfArrays(columns, rows) {
	let array = new Array(columns);
	for (i = 0; i < array.length; i++) {
		array[i] = new Array(rows);
	}
	return array;
}

let grid;
let columns = 10;
let rows = 10;

function setup() {
	grid = makeArrayOfArrays(columns, rows);
	for (i = 0; i < columns; i++) {
		for (j = 0; j < rows; j++) {
			grid[i][j] = floor(random(2));
		}
	}
}