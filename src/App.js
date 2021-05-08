import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))

function App() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" area-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Погода в городах России</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">
              Москва
            </Button>
          </Box>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">
              Казань
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
