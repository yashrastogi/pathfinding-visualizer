import React, { useState } from "react";
import Home from "./Home";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  AppBar,
  CssBaseline,
  Toolbar,
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import * as Icon from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState("Test");
  const [state, setState] = useState({
    drawerOpen: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, drawerOpen: open });
  };

  const list = (anchor) => (
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Icon.Inbox /> : <Icon.Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Icon.Inbox /> : <Icon.Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <Icon.Menu />
          </IconButton>
          <Drawer
            anchor="left"
            open={state["drawerOpen"]}
            onClose={toggleDrawer(false)}
          >
            {list("left")}
          </Drawer>
          <Typography className={classes.text} variant="h5">
            Pathfinding Visualizer{"  "}
            <Icon.NavigateNext
              fontSize="large"
              style={{
                display: "inline-flex",
                position: "relative"
              }}
            ></Icon.NavigateNext>
            {"  "}
            {currentPage}
          </Typography>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <Icon.Search />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <Icon.More />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Home setPage={setCurrentPage}></Home>
      </Container>
    </React.Fragment>
  );
}
