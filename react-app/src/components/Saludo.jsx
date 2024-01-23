import React, { Fragment } from 'react';

const Saludo = (props) => {
    return (
            <Fragment>
                <h2>Saludo {props.persona}, Edad {props.edad}</h2>
            </Fragment>
     );
}
 
export default Saludo;