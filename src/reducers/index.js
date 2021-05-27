import { combineReducers } from 'redux'

import DomiciliosReducer from './DomiciliosReducer'

import ValidarFormReducer from './ValidarFormReducer'

export default combineReducers({
    domicilios: DomiciliosReducer,
    error: ValidarFormReducer
})