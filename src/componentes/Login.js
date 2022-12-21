import React from "react";
import { app } from "./fb";
import './estilos/login.css'

const Login = (props) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);
  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        alert("Usuario creado con exito");
        props.setUsuario(usuarioFirebase);
      });
  };
  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        alert("Iniciaste sesion");
        props.setUsuario(usuarioFirebase);
      });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;
    if (isRegistrando) {
      crearUsuario(correo, password);
    }
    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };
  return (
    <div className="logueo">
      <h1> {isRegistrando ? "Regístrate..." : "Iniciar Sesion..."}</h1> <br></br>
      <form onSubmit={submitHandler}>
        <label htmlFor="emailField"> Correo </label> <br></br>
        <input type="email" id="emailField" /> <br></br>
        <label htmlFor="passwordField"> Contraseña </label> <br></br>
        <input type="password" id="passwordField" /> <br></br>
        <button type="submit">
          {" "}
          {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
        </button> 
      </form>
      <button onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando
          ? "¡Inicia sesión!"
          : "¡Regístrate!"}
      </button>
    </div>
  );
};

export default Login;
