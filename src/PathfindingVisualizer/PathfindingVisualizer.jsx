import React, {useState} from 'react';
import Home from './Home';
import {makeStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import * as MaterialIcon from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

function onDrawerClick(props) {
  console.log('Hey Bro!');
  console.log(props);
}

export default function BottomAppBar() {
  const classes = useStyles();
  const appName = 'Pathfinding Visualizer';
  const [currentPage, setCurrentPage] = useState('Home');
  const [state, setState] = useState({drawerOpen: false, dialogOpen: false});

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
      return;
    setState({...state, drawerOpen: open});
  };

  const toggleDialog = () => setState({...state, dialogOpen: true});

  const list = () => (
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button key="Home" onClick={onDrawerClick}>
          <ListItemIcon>
            <MaterialIcon.Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="About" onClick={toggleDialog}>
          <ListItemIcon>
            <MaterialIcon.Info />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </div>
  );

  const AboutDialog = () => (
    <Dialog
      open={state['dialogOpen']}
      onClose={toggleDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">About</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel vero
          perferendis repudiandae sint eligendi expedita amet. Qui nostrum id laudantium
          vero, aliquid officiis voluptate culpa quae modi non earum!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialog} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  const MyAppBar = () => (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MaterialIcon.Menu />
          </IconButton>
          <Drawer anchor="left" open={state['drawerOpen']} onClose={toggleDrawer(false)}>
            {list('left')}
          </Drawer>
          <Typography className={classes.text} variant="h5">
            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
              <span>{appName}</span>
              &ensp; <MaterialIcon.ArrowForward /> &ensp;
              <span>{currentPage}</span>
            </div>
          </Typography>
          <div className={classes.grow} />
          <IconButton color="inherit" edge="end">
            <MaterialIcon.Search />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <AboutDialog />
      <MyAppBar />
      <Home />
    </React.Fragment>
  );
}
