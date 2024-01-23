import axios from "axios";

// Constants
const dataInicial = {
  array: [],
  offset: 0
}

const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const OBTENER_SIGUIENTES_POKEMONES_EXITO = "OBTENER_SIGUIENTES_POKEMONES_EXITO";
const OBTENER_ANTERIOR_POKEMONES_EXITO = "OBTENER_ANTERIOR_POKEMONES_EXITO";

// reducer
export default function pokesReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, array: action.payload}
        case OBTENER_SIGUIENTES_POKEMONES_EXITO:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        case OBTENER_ANTERIOR_POKEMONES_EXITO:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        default:
            return state
    }
}

// actions
export const obtenerPokemonesAction = () => async (dispatch, getState) => {
    const {offset} = getState().pokemones

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export const obtenerSiguientesPokemonesAction = () => async (dispatch, getState) => {
    const offset = getState().pokemones.offset
    const siguiente = offset + 20

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: OBTENER_SIGUIENTES_POKEMONES_EXITO,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const obtenerAnteriorPokemonesAction = () => async (dispatch, getState) => {
    const offset = getState().pokemones.offset
    const siguiente = offset - 20

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: OBTENER_ANTERIOR_POKEMONES_EXITO,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }
}