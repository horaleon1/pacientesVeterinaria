import React, { Component } from "react";
import uuid from 'uuid';

export default class NuevaCita extends Component {
  state = {
     cita:{
       mascota:'',
       propietario:'',
       fecha:'',
       hora:'',
       sintomas:''

     }
  }

  //usuario escribe en los inputs
  handleChange = (e) => {
    this.setState({
      cita:{
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    })
  }
  //usuario envia el formulario
  handleSubmit = (e) => {
   e.preventDefault();

   //extraer los valores del state
   const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

   //validar que todos los campos esten llenos

   if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
     this.setState({
       error:true
     })
     //detener la ejecucion
     return
   }

   //generar objeto con los datos
   const nuevaCita = {...this.state.cita};
   nuevaCita.id = uuid();

   //Agregar la cita al state de App
   this.props.crearNuevaCita(nuevaCita)
   
  }

  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-title text-center mb-5">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>

          <form  onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño Mascota"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input type="date" className="form-control" name="fecha" 
                onChange={this.handleChange}
                value={this.state.cita.fecha}/>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input type="time" className="form-control" name="hora" 
                onChange={this.handleChange}
                value={this.state.cita.hora}/>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Describe los Sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                />
              </div>
            </div>

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva Cita"
            />

          </form>
        </div>
      </div>
    );
  }
}
