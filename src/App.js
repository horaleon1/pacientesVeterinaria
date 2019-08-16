import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCita from "./components/ListaCita";

class App extends Component {
  state = {
    citas: []
  };

  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];
    //agregar el nuevo state
    this.setState({
      citas
    });
  };

  //elimina las citas del state
  eliminarCita = id  => {
    //siempre tomar una copia del state
     const citasActuales = [...this.state.citas];
    //utilizar filter para sacar el elemento @id del arreglo
     const citas = citasActuales.filter( cita => cita.id === id)
    //actializar el state
    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
           <ListaCita 
           citas={this.state.citas}
           eliminarCita={this.eliminarCita}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
