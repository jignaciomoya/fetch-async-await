const showPokemon = document.getElementById('app');
const selectedPokemon = document.getElementById('selected-pokemon');
let callPokemon = () => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error al obtener datos del Pokémon');
            }
            return response.json();
        })
        .then((data) => {
            showPokemon.innerHTML = '';
            const pokemonData = document.getElementById('pokemon-img') = 
            `
                <img src="${data.sprites.front_default}" alt="${data.name}"/>
                <p>Nombre: <span>${data.name}</span></p>
                <p>Tipo: <span>${data.types.map(type => type.type.name).join(', ')}</span></p>
                <p>Altura: <span>${data.height}</span></p>
                <p>Peso: <span>${data.weight}</span></p>
            `;

        })
        .catch(error => {
            console.error('Error:', error.message);
        });
};

callPokemonn();