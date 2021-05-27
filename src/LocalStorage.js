export const obtenerState = () => {
    const domicilioStore = localStorage.getItem('domicilios')

    if (domicilioStore === null) {
        return []
    }
    return JSON.parse(domicilioStore)
}

export const guardarStore = (state) => {
    const domicilioStore = JSON.stringify(state.domicilios)
    localStorage.setItem('domicilios', domicilioStore)
}