import React from "react";

// hooks react redux
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import { obtenerPokemonesAction, obtenerSiguientesPokemonesAction, obtenerAnteriorPokemonesAction } from "../redux/pokesDucks";

const Pokemones = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector(store => store.pokemones.array);
  //console.log(pokemones);

  return <div>
    Listado de Pokemones!
    <button onClick={() => dispatch(obtenerPokemonesAction())}>Get Pokemons</button>
    <button onClick={() => dispatch(obtenerSiguientesPokemonesAction())}>Siguiente</button>
    <button onClick={() => dispatch(obtenerAnteriorPokemonesAction())}>Anterior</button>
    <ul>
    {
        pokemones.map(item => (
            <li key={item.name}>{item.name}</li>
        ))
    }
    </ul>
    </div>;
};

export default Pokemones;
