import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from '@material-ui/core';
import BFS from './utils/BFS';
import React, {useEffect, useState} from 'react';
import VisualizerGrid from './tools/VisualizerGrid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

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
  // grid[2][2] = {start: false, visited: true, end: false, wall: false, num: 2};
  grid[1][2] = {start: true, visited: true, end: false, wall: false, num: 2};
  grid[3][4] = {start: false, visited: false, end: true, wall: false, num: 2};
  setGrid(grid);
}

export default function Home(props) {
  const [grid, setGrid] = useState([[0]]);
  const [algo, setAlgo] = useState('');
  const classes = useStyles();
  const handleAlgorithmChange = (e) => setAlgo(e.target.value);
  useEffect(() => populateGrid(setGrid, 5), [setGrid]);

  const handleStartClick = (event) => BFS({...grid}, setGrid);

  return (
    <div style={{padding: 20}}>
      <Grid container justify="center">
        <br />
        <Grid container justifyContent="center" spacing={5} alignItems="center">
          <Grid item>
            <Button onClick={handleStartClick} color="primary" variant="contained">
              Start&nbsp;
            </Button>
          </Grid>
          <Grid item>
            <Typography id="discrete-slider">&nbsp;&nbsp; Speed &nbsp;&nbsp;</Typography>
            <Slider
              defaultValue={1}
              getAriaValueText={(value) => value}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
            />
          </Grid>
          <Grid item>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Algorithm</InputLabel>
              <Select value={algo} onChange={handleAlgorithmChange}>
                <MenuItem value="BFS">Breadth-first Search</MenuItem>
                <MenuItem value="DFS">Depth-first Search</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <VisualizerGrid grid={grid} />
      </Grid>
    </div>
  );
}
