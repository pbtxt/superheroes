import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [
        {
          nombre: "Paola",
          correo: "paola@gmail.com",
          enlace: "paola.com",
        },
        {
          nombre: "Luis",
          correo: "luis@gmail.com",
          enlace: "luis.com",
        },
      ],
    };
  }

  async componentDidMount() {
    console.log("component");
    const respuesta = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3044147965817064/search/b"
    );
    respuesta.data.results.map((x) => {
      console.log(x);
    });
  }

  generateFila = () => {
    this.state.usuarios.map((usuario) => {
      return (
        <tr>
          <td>{usuario.nombre}</td>
          <td>{usuario.correo}</td>
          <td>{usuario.enlace}</td>
        </tr>
      );
    });
  };

  render() {
    return <table>{this.generateFila()}</table>;
  }
}

export default App;
