let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
  [3, 2, 5, 4, 6],
  [7, 8, 9, 1, 2]
];
let N = matrix.length;
let M = matrix[0].length; 
function printZigZag(matrix, N, M) {
  let result = [];
  for (let startCol = M - 1; startCol >= 0; startCol--) {
    let row = 0;
    let col = startCol;
    let diagonal = [];
    while (row < N && col < M) {
      diagonal.push(matrix[row][col]);
      row++;
      col++;
    }
    result.push(...diagonal);
  }
  for (let startRow = 1; startRow < N; startRow++) {
    let row = startRow;
    let col = 0;
    let diagonal = [];
    while (row < N && col < M) {
      diagonal.push(matrix[row][col]);
      row++;
      col++;
    }
    result.push(...diagonal);
  }
  console.log(result.join(" "));
}
printZigZag(matrix, N, M);
