import React from "react";
import { Grid, makeStyles, Box, withWidth } from "@material-ui/core/";

const estilos = makeStyles((theme) => ({
  fondo: {
    background: theme.palette.secondary,
  },
}));

const Caja = () => {
  const classes = estilos();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box border={2}>
            xs12
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box border={2}>
            xs12
          </Box>
        </Grid>
        {/* <Box color="primary.main">TExto</Box>
        <Box color="primary.main" bgcolor="primary.constrastText">
          TExto
        </Box>
        <Box mr={20} border={1} borderColor="error.main">
          TExto MG
        </Box> */}
      </Grid>
    </div>
  );
};

export default Caja;
