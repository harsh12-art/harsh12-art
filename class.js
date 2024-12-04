let N = 3;
let M = 2;
let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];
for (let i = 0; i < N; i++) {
  let row = arr[i];
  let rowString = row.join(" "); 
  console.log(rowString);
}
