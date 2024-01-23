import React from "react";
import Navbar from "../components/Navbar";
import Cajon from "../components/Cajon";
import Caja from "../components/Caja";

import { makeStyles, Hidden, Button } from "@material-ui/core/";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginLeft: 240
  },
}));

const Contenedor = () => {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  return (
    <div className="classes.root">
      <Navbar accionAbrir={accionAbrir}/>
      <Hidden xsDown>
        <Cajon 
        variant="permanent" 
        open={true} />
      </Hidden>
      <Hidden xsUp>
        <Cajon 
        variant="temporary" 
        open={abrir} 
        onClose={accionAbrir}
        />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}>Contenido</div>
        <Caja />
      </div>
    </div>
  );
};

export default Contenedor;
