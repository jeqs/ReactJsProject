import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./temaConfig";
import Navbar from "./components/Navbar";
import Lista from "./components/Lista";
import Oculto from "./components/Oculto";
import Contenedor from "./components/Contenedor";

const useStyle = makeStyles({
  customCSS: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

function App() {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <Contenedor />

      {/* <Navbar />
      <Button variant="contained" color="secondary">
        Boton primary
      </Button>
      <Button variant="contained" color="secondary">
        Boton secondary
      </Button>
      <Lista/>
      <Oculto /> */}

      {/* <Button className={classes.customCSS}>Botton</Button> */}
      {/* <Typography variant="h1" color="initial">
        Texto Titulo
      </Typography>
      <Typography variant="body1" align="center" color="primary" gutterBottom>
        lorem
      </Typography>
      <Typography variant="body1" align="center" color="secundary">
        Texto Titulo
      </Typography> */}
      {/* <Button
        color="primary"
        variant="contained"
        size="large"
        href="https://google.com"
      >
        small
      </Button>
      <DeleteIcon color="primary" fontSize="large" />
      <Icon color="primary">room</Icon>
      <IconButton aria-label="delete" color="primary">
        <DeleteIcon />
      </IconButton>
      <p>Texto</p>
      <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
        Eliminar
      </Button> */}
    </ThemeProvider>
  );
}

export default App;
