<script lang="ts">
	export let pokemn: any;
</script>

<a href={`/pokemon/${pokemn.id}`}>
	<img src={pokemn.image} alt={pokemn.name.name} />
	<h1>{pokemn.id}.{pokemn.name.name}</h1>
</a>
