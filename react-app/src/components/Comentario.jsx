import React, { Fragment } from 'react';
import Avatar from "./Avatar";

const Comentario = ({sujeto}) => {
    return (
            <Fragment>
                <div className="media">
                    {<Avatar urlImage={sujeto.url} />}
                    <div className="media-dody">
                        <h5 className="mt-0">{sujeto.nombre}</h5>
                        <p className="mt-3">
                        {sujeto.texto}
                        </p>
                    </div>
                </div>
            </Fragment>
     );
}
 
export default Comentario;