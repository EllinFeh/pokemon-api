import React, {Component} from "react";
import { getPokemons } from "../../services/api";


  class Pokeworld extends Component{
    state = {
      pokemons: [],
    };
  
    componentDidMount(){
      getPokemons()
      .then(data => {
        this.setState({ pokemons: data });
      })
      .catch(error => {
        console.error(error);
      })
    }
    render() {
      const {pokemons} = this.state;
      
      return (
        <div>
        <h1>Listagem de pokemons:</h1>
        
           {pokemons.map(pokemon => (
            <div>
             <img src={pokemon.imageUrl}/>
             {pokemon.name}
             </div>

           ))}
        </div>
      )
    }
  }


export default Pokeworld;
