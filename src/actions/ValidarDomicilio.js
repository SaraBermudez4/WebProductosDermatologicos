import {types} from '../types/type'

const ValidarAction = (state) => {
    return {
        type: types.validar,
        payload: state
    }
}

export default ValidarAction