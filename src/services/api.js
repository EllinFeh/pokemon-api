import axios from "axios";

export function getPokemons(){
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=150'

    return axios.get(apiUrl)
     .then(response => {
        const pokemons = response.data.results;
        
        pokemons.forEach((pokemon, index) => {
            const pokemonId = index + 1;
            pokemon.id = pokemonId;
            pokemon.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

        });
        pokemons.sort((a,b) => a.id - b.id);
        
        return pokemons;
        })
     .catch(error => {
        throw error;
     });
}

