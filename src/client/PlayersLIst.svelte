<script>
	export let socket;
	let name = '';

	socket.on('update', data => {
        data.players.some(player => {
            if (socket.id === player.id) {
                name = player.name;

                return true;
            }

            return false;
        });

        console.log(JSON.stringify(data, null, 4));
    });

    function changeName() {
        socket.emit('update:player', name);
    }

</script>

<main>
	<form on:submit|preventDefault={changeName}>
	    <label for="name">Player Name</label>
    	<input type="text" name="name" bind:value={name} />
    	<input type=submit />
    </form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
