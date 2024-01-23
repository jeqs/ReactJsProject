import React from "react";
import Lista from "../components/Lista";

import { makeStyles, Drawer, Divider } from "@material-ui/core/";

const drawerWidth = 240;

const estilos = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const Cajon = (props) => {
  const classes = estilos();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar} />
      <Divider />
      <Lista />
    </Drawer>
  );
};

export default Cajon;
