 import React, { Component } from 'react';

class Buscador extends Component{

 busquedaRef = React.createRef();

 obtenerDatos = (e) =>{
  e.preventDefault();
//tomamos valor del imput
  const termino = this.busquedaRef.current.value;
 //lo enviamos al componente principal  
  this.props.datosBusqueda(termino);
 }

    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    
                    <div className="form-group col-md-8">
                       <input ref={this.busquedaRef} className="form-control form-control-lg" placeholder="Busca tu Imagen.Ejemplo:futbol"></input>
                    </div>
                    <div className="form-group col-md-4">
                       <input type="submit" className="btn btn-lg btn-danger" value="Buscar..."></input>
                    </div>
                </div>
             </form>
        );
    }
}



export default Buscador;