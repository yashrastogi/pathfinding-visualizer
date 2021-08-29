import './styles.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import VisualizerGrid from './PathfindingVisualizer/VisualizerGrid';
import { CssBaseline } from '@material-ui/core';

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <PathfindingVisualizer />
    </div>
  );
}
