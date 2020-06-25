<script>
	export let socket;
	let players = [];

	socket.on('update', data => {
        players = data.players;
    });
</script>

<main>
    <ul>
        {#each players as player}
            <li>{player.name}</li>
        {/each}
    </ul>
</main>

<style>
    ul {
        list-style-type: none;
    }
</style>
