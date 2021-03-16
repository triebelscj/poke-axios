import './App.css';
import axios from 'axios'
import { useState } from 'react'


function App() {

  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        setPokemon(response.data.results);
      });
  };


  return (
    <div className="App">
      <button className='getter' onClick={fetchPokemon}>Get Pokemón!</button>
      <div className="toCenter">
        {pokemon.map((poke, index) => {
          return (<p poke={poke} key={index} >  {poke.name}  </p>)
        })}
      </div>
    </div>
  );
}

export default App;
