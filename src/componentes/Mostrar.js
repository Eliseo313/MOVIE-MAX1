import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore"
import { db } from './fb'
import './estilos/mostrar.css'

function Mostrar() {
    const [usuarios, setUsuarios] = useState ([])
    const usuariosCollection = collection(db, "usuarios")
    const getUsuarios = async () => {
        const data = await getDocs(usuariosCollection)
        setUsuarios(
            data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))
        )
    }
    const deleteUsuario = async (id) => {
        const usuarioDoc = doc(db, "usuarios", id)
        alert("¿Seguro que deseas eliminarlo?");
        await deleteDoc (usuarioDoc)
        getUsuarios()
    }
    useEffect( () =>{
        getUsuarios()
        // eslint-disable-next-line
    }, [] )

    return (
        <>
            <h1>¿Quien esta viendo ahora?</h1> <br></br>
            <h2>Seleciona un perfil</h2> <br></br>
            <button><Link className='botones' to="/crear">Crear Perfil</Link></button> <br></br>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Botones</th>
                </tr>
                {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.correo}</td>
                        <td>
                            <button><Link className='botonEditar' to={`/editar/${usuario.id}`}>Editar</Link></button>
                            <button className='botonBorrar' onClick={() => { deleteUsuario(usuario.id) }}>Eliminar</button>
                            <button><Link className='botonSelect' to={"/home"}>Seleccionar perfil</Link></button>
                        </td>
                    </tr>
                ))}
            </table> <br></br>
            <button><Link className='botones' to={"/home"}>Ir al inicio</Link></button>
            
        </>
    )
}
export default Mostrar