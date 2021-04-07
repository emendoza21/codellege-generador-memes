import React, { Component } from "react";
import "./App.css";

//* Convertir a clase
//* State (top y bottom)
//* Handle change method (event.target.name y event.target.value)
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      top: "",
      bottom: "",
      memes: [],
      plantilla:
        "https://images.memefier.com/media/memetemplates_500/b6c7ea36-ffc0-4228-b86d-2f565cc0b8f1.jpg",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((responsive) => responsive.json())
      .then((memesjson) => {
        this.setState({
          memes: memesjson.data.memes,
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("hubo un error");
      });
  }
  render() {
    var { items } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">¡Memeland!</h1>
          <Meme
            top={this.state.top}
            bottom={this.state.bottom}
            plantilla={this.state.plantilla}
          />
          <MemeForm values={this.state} onChange={this.handleChange} />
        </div>

        <div className="conteiner_images">
          {" "}
          {this.state.memes.map((item) => {
            return (
              <img
                src={item.url}
                className="images"
                onClick={() => {
                  this.setState({ plantilla: item.url });
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

//* Pasar los textos como props
function Meme(props) {
  return (
    <div className="meme-template">
      <img className="image-template" src={props.plantilla} alt="Plantilla" />
      <h2 className="top-text">{props.top}</h2>
      <h2 className="bottom-text">{props.bottom}</h2>
    </div>
  );
}

// Pasar value por props
// On change por props
function MemeForm(props) {
  return (
    <form>
      <input
        name="top"
        value={props.values.top}
        placeholder="Texto superior"
        className="form-input"
        onChange={props.onChange}
      />
      <input
        name="bottom"
        value={props.values.bottom}
        placeholder="Texto inferior"
        className="form-input"
        onChange={props.onChange}
      />
      <br></br>
      <h3 className="creditos">
        Created by Eduardo mendoza.
        <a href="https://github.com/emendoza21/memes-generator" target="_blank">
          Git hub
        </a>
      </h3>
    </form>
  );
}

export default App;
