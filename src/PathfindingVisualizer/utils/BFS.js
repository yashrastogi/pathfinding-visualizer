const directions = [
  [0, 1],
  [1, 0],
  [1, 1],
  [0, -1],
  [-1, 0],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

export default function BFS(grid, setGrid) {
  const [start, end] = getStartEnd(grid);
  console.log(start, end);
  let q = [start];
  while (q.length > 0) {
    const curr = q.shift();
    if (curr === end) {
      return;
    }
    directions.forEach((dir) => {
      let currN = [curr[0] + dir[0], curr[1] + dir[1]];
      if (
        currN[0] >= 0 &&
        currN[0] < grid.length &&
        currN[1] >= 0 &&
        currN[1] < grid[0].length &&
        !grid[currN[0]][currN[1]].visited
      ) {
        grid[currN[0]][currN[1]].visited = true;
        q.push(currN);
      }
    });
  }
  setGrid(grid);
}

function getStartEnd(grid) {
  const ret = [
    [-1, -1],
    [-1, -1],
  ];
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j].start) ret[0] = [i, j];
      if (grid[i][j].end) ret[1] = [i, j];
      if (ret[0] !== [-1, -1] && ret[1] !== [-1, -1]) return ret;
    }
  return ret;
}
