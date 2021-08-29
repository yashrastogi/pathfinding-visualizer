import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import VisualizerGrid from './VisualizerGrid';

function populateGrid(setGrid, dim) {
  const grid = new Array(dim);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(dim);
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = {
        start: false,
        visited: false,
        end: false,
        wall: false,
        num: i * dim + j,
      };
    }
  }
  grid[2][2] = { start: false, visited: true, end: false, wall: false, num: 2 };
  grid[1][2] = { start: true, visited: true, end: false, wall: false, num: 2 };
  grid[3][4] = { start: false, visited: false, end: true, wall: false, num: 2 };
  setGrid(grid);
}

export default function Home(props) {
  const [grid, setGrid] = useState([[0]]);
  useEffect(() => {
    populateGrid(setGrid, 20);
  }, [setGrid]);

  return (
    <Container>
      <VisualizerGrid grid={grid} />
    </Container>
  );
}
