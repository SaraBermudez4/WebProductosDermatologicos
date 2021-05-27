import React from 'react'
import { actionDomicilio } from '../actions/ActionDomicilio'
import ValidarFormReducer from '../actions/ValidarDomicilio'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'react-uuid'

const PedirDomicilio = () => {

    const [formValue, handleInputChange, reset] = useForm({
        nombre: '',
        apellido: "",
        correo: "",
        direccion: "",
        productos: ""
    })

    const { nombre, apellido, correo, direccion, productos } = formValue

    const dispatch = useDispatch()

    const AgregarDomicilio = (domicilio) => {
        dispatch(actionDomicilio(domicilio))
    }

    const ValidarFormulario = (state) => {
        dispatch(ValidarFormReducer(state))
    }

    const error = useSelector((state) => state.error)

    const handleSubmit = (e) => {
        e.preventDefault()
        reset()
        if (nombre.trim() === '' || apellido.trim() === '' || correo.trim() === '' || direccion.trim() === '' || productos.trim() === '') {
            ValidarFormulario(true)
            return
        }
        ValidarFormulario(false)

        AgregarDomicilio({
            id: uuid(),
            nombre,
            apellido,
            correo,
            direccion,
            productos
        })
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h1> Pedir productos</h1>
                    <hr />

                    <div className="form-group row mt-3">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                autoComplete="off"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">Apellido</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="text"
                                name="apellido"
                                className="form-control"
                                autoComplete="off"
                                value={apellido}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Correo</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="text"
                                name="correo"
                                className="form-control"
                                placeholder="Tu correo"
                                autoComplete="off"
                                value={correo}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Dirección</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="text"
                                name="direccion"
                                className="form-control"
                                placeholder="Tu dirección"
                                autoComplete="off"
                                value={direccion}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Productos</label>
                        <div className="form-group">
                            <textarea
                                name="productos"
                                className="form-control"
                                autoComplete="off"
                                value={productos}
                                onChange={handleInputChange}>
                            </textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
                {
                    error.error ? <div className="alert alert-danger text-center p2">Todos los campos son obligatorios</div> : null
                }
            </div>
        </div>
    )
}

export default PedirDomicilio
