import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [state, setState] = useState([])

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((result)=>{
          console.log(result.data.results)
          setState(result.data.results)
        }).catch((err)=>{
          console.log(err)
        })
  }, [])

  return (
    <div className="App">
      {
        state.map((pokemon, i)=>(
          <div key={i}>
            <h1>{pokemon.name}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default App;
