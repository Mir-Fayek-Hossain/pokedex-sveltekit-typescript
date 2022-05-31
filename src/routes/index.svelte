<script>
	import PokemanCard from '../components/pokemanCard.svelte';
	import { pokemon } from '../stores/pokemonStore';

	console.log($pokemon);
	let searchTerm = '';
    let filteredPokemon=[{}];
    $:{
        console.log(searchTerm);
        if(searchTerm){
            filteredPokemon=$pokemon.filter(pokeman=>pokeman.name.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        else{
            filteredPokemon=[...$pokemon]

        }
    }
</script>

<svelte:head>
	<title>Index Loox</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<input type="text" placeholder="Search pokemon"  bind:value={searchTerm}>
<br>
{#each filteredPokemon as pokem}
	<PokemanCard pokemn={pokem} />
{/each}
