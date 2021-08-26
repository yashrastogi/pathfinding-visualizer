import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";
import * as Icon from "@material-ui/icons";

export default function PathfindingVisualizer() {
  return (
    <div id="pathfinding-visualizer">
      <AppBar>
        <Toolbar>
          <IconButton>
            <Icon.Menu style={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
