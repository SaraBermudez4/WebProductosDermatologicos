import { types } from "../types/type"

const initialState = {
    domicilios: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.pedir:
            return {
                ...state,
                domicilios: [...state.domicilios, action.payload]
            }
        case types.cancelar:
            return {
                ...state,
                domicilios: state.domicilios.filter(domicilio => domicilio.id !== action.payload)
            }
        default:
            return state
    }
}