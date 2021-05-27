import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CancelarDomicilio } from '../actions/ActionDomicilio'

const ListarDomicilio = () => {

    const dispatch = useDispatch()

    const pedidos = useSelector((state) => state.domicilios)
    
    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">Pedidos</h2>
                <div className="lista-citas">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Productos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pedidos.domicilios.map((domicilio) => (
                                    <tr key={domicilio.id}>
                                        <td>{domicilio.nombre}</td>
                                        <td>{domicilio.apellido}</td>
                                        <td>{domicilio.correo}</td>
                                        <td>{domicilio.direccion}</td>
                                        <td>{domicilio.productos}</td>
                                        <td><button className="btn btn-danger" onClick={() => {
                                            dispatch(CancelarDomicilio(domicilio.id))
                                        }}>
                                            Borrar &times;
                                        </button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}

export default ListarDomicilio
