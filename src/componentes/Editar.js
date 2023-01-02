import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from './fb'
import './estilos/editar.css'

function Editar() {
  const [ nombre, setNombre ] = useState('')
  const [ correo, setCorreo ] = useState('')
  const navigate = useNavigate()
  const {id} =useParams()
  const update = async (e) => {
    e.preventDefault()
    const usuario = doc(db, "usuarios", id)
    const data = { nombre: nombre, correo: correo}
    await updateDoc(usuario, data)
    navigate('/')
  }
  const getUsuariosById = async (id) => {
    const usuario = await getDoc(doc(db, "usuarios", id))
    if(usuario.exists()) {
      //console.log(usuario.data())
      setNombre(usuario.data().nombre)
      setCorreo(usuario.data().correo)
    }else{
      console.log("El usuario no existe")
    }
  }
  useEffect( () =>{
    getUsuariosById(id)
    // eslint-disable-next-line
}, [] )
  return (
    <>
      <div className='editar'>
        <h1>Editar Perfil</h1> <br></br>
        <form onSubmit={update}>
          <div>
            <label className='labels'>Nombre</label> <br></br>
            <input
              className='nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label className='labels'>Correo</label> <br></br>
            <input
              className='correo'
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              type="text"
            />
          </div>
          <button className='btn' type='submit'>Guardar Cambios</button>
        </form>
      </div>
    </>
  )
}
export default Editar