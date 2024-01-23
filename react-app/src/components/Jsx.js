import React, {useState, Fragment} from 'react';

// sfc
const Jsx = () => {

    const [numero, setNumero] = useState(10);
    const aumentar = () => {
        setNumero(numero + 1);
    }

    const saludo = "Hola JSX";
    return (  
        <Fragment>
            <h1>{saludo}</h1>
            <h3>Temperatura : {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
            <h4>
                {
                    numero > 20 ? "Calor" : "Frio"
                }
            </h4>
        </Fragment>
    );
}
 
export default Jsx;