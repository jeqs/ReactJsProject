import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/core/Menu";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyle();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={() => props.accionAbrir()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          NavBar
        </Typography>
        <Button variant="text" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
