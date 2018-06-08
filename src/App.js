import React, { Component } from 'react'
import './App.css'
import Search from './Search'
import Infos from './Infos';
import Pokemon from './Pokemon'


class App extends Component {

  state={
    input: '',
    pokemon: {}
}

  onChangeInput = (event) => {
    console.log(event.target.value)
    this.setState({ input : event.target.value });//prend le input du state et lui ajoute la value!!
    console.log(this.setState);
  };

  getPokemonFromApi = () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${ this.state.input }`)
      .then((response) => response.json()) // promise, le code ne serat
      .then((data) => { // executé que quand la data du fetch sera arrivée
        const pokemon = new Pokemon(data)
        this.setState({pokemon});
      })
      .catch((error) => {
        console.error(error);
    });
  };
  
  
  render() {
    return (
      <div className="App">
        <Infos pokemon={ this.state.pokemon }/>
        <Search  onChangeInput={ this.onChangeInput }/>
        <button type='submit' onClick={ this.getPokemonFromApi.bind(this)}>Chercher</button>
      </div>
    );
  }
}

export default App;
