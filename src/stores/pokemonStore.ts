import { writable } from 'svelte/store';
export const pokemon = writable([]);
const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=5';
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data:string, index:number) => {
		return {
			id: index + 1,
			 name: data,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
    // console.log(loadedPokemon.map((a:any)=>{
    //     return a.name
    // }));
    
	pokemon.set(loadedPokemon);
};
fetchPokemon();
