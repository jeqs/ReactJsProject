import React, {useState, Fragment} from 'react';

const Lista = () => {
    const [arrayNumero, setArrayNumero] =  useState([1,2,3,4,5,6]);
    const [numero, setNumero] =  useState(7);

    const agregarElemento = () => {
        setNumero(numero + 1);
        setArrayNumero([...arrayNumero, numero]);
    };

    return ( 
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                arrayNumero.map((item, index) => 
                    <p key={index}>{item} - {index}</p>
                )
            }
        </Fragment>
    );
}
 
export default Lista;