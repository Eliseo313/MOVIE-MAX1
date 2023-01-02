import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './fb'
import './estilos/crear.css'

function Crear() {
  const [ nombre, setNombre ] = useState('')
  const [ correo, setCorreo ] = useState('')
  const navigate = useNavigate()
  const usuariosCollection = collection(db,"usuarios")
  const store = async (e) => {
    e.preventDefault()
    await addDoc( usuariosCollection, { nombre: nombre, correo: correo } )
    navigate('/')
    console.log(e.target[0].value)
  }
  return (
    <>
      <div className='crear'>
        <h1>Crear Perfil</h1> <br></br>
        <form onSubmit={store}>
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
          <button className='btn' type='submit'>Guardar</button>
        </form>
      </div>
    </>
  )
}
export default Crear