import React from 'react';
import { Typography, withWidth, Hidden, Button } from "@material-ui/core";

const Oculto = (props) => {
    return ( 
        <div>
            <Typography variant='h6' color='initial'>
               Ancho: {props.width}
            </Typography>
            <Hidden xsDown>
                <Button variant="contained" color="primary">
                XS
                </Button>
            </Hidden>
            <Hidden smDown>
                <Button variant="contained" color="secundary">
                SM
                </Button>
            </Hidden>
            <Hidden mdUp>
                <Button variant="contained" color="secundary">
                MD
                </Button>
            </Hidden>
            <Hidden only={['lg', 'md']}>
                <Button variant="contained" color="secundary">
                LG
                </Button>
            </Hidden>
        </div>
     );
}
 
export default withWidth()(Oculto);