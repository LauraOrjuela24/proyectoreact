import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Resultado from "./components/Resultado";

class App extends Component {
  
state = {
  termino: '',
  imagenes : [],
  pagina : ''
}

scroll = () =>{
  const elemento = document.querySelector('.jumbotron');
  elemento.scrollIntoView('smooth','start')
}

paginaAnterior = () =>{
//traer state
let pagina = this.state.pagina;
//si es uno no ir mas hacie atras
if(pagina===1) return null;
//resta uno 
pagina -= 1;
//agregar cambio
this.setState({pagina},
  () =>{
    this.consultarApi();
    this.scroll();
  }
  )

//console.log(pagina)


}

paginaSiguiente = () =>{
//traer state
let pagina = this.state.pagina;
//summar uno 
pagina += 1;
//agregar cambio
this.setState({pagina})
this.setState({
  pagina
}, () =>{
  this.consultarApi();
  this.scroll();
} )


//console.log(pagina)
}

consultarApi = () =>{
  const termino = this.state.termino;
  const pagina = this.state.pagina;
  const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;
  //console.log(url);

  fetch(url)
  .then(respuesta => respuesta.json ())
  .then(resultado => this.setState({ imagenes : resultado.hits}) )
}

datosBusqueda = (termino) => {
this.setState({
  termino : termino,
  pagina : 1
}, () => {
 this.consultarApi();
});
}

  render(){
  return (
    <div className="container">
       <div className="jumbotron">
         <p className="load text-center">Buscador de Imágenes</p> 
       <Buscador
       datosBusqueda={this.datosBusqueda}
       
       />
       </div>
       <div className="row justify-content-center">
       <Resultado 
       imagenes={this.state.imagenes}
       paginaAnterior={this.paginaAnterior}
       paginaSiguiente={this.paginaSiguiente}
/>
       </div>
    </div>
  );

}
}

export default App;
