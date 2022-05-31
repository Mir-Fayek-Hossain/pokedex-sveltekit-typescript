<script context="module" lang="ts">
	export async function load({ params}:any) {
		const id = params.id;
        const url =`https://pokeapi.co/api/v2/pokemon/${id}`
        const res =await fetch(url)
        const pokeman=await res.json()
        console.log(pokeman);
        
        return {props:{pokeman}}
	}
</script>
<script lang="ts">
    export let pokeman:any;
    
</script>
<h1>{pokeman.id}</h1>
<h1>{pokeman.name}</h1>
<h1>{pokeman.types[0].type.name}</h1>
<h1>{pokeman.weight}</h1>
<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeman.id}.png`} alt="aaa">
<!-- <img src={pokeman.sprites['front_default']} alt="image"> -->