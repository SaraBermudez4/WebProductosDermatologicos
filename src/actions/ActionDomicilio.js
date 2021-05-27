import { types } from "../types/type";

export const actionDomicilio = (domicilio) => {
    return {
        type: types.pedir,
        payload: domicilio
    }
}

export const CancelarDomicilio = (id) => {
    return {
        type: types.cancelar,
        payload: id
    }
}