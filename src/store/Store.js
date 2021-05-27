import { createStore } from 'redux' 
import { obtenerState, guardarStore } from "../LocalStorage"
import reducers from '../reducers'

const storageState = obtenerState()

const store = createStore(
    reducers,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(()=>{
    guardarStore({
        domicilios: store.getState().domicilios
    })
})

export default store