<script>
	export let socket;
	let isGameReady = false;

    socket.on('update', (data) => isGameReady = data.config.isGameReady);

    function beginGame() {
        socket.emit('begin:game');
    }
</script>

<main>
	<form on:submit|preventDefault={beginGame}>
    	<input type=submit disabled={!isGameReady} value="Begin Game" />
    </form>
</main>

<style>

</style>
