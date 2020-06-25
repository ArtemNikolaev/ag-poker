<script>
	export let socket;
	let msg = '';

    function sendMsg() {
        socket.emit('chat:message', msg);
        msg = '';
    }

</script>

<main>
	<form on:submit|preventDefault={sendMsg}>
	    <label for="name">Message: </label>
    	<input type="text" name="message" bind:value={msg} />
    	<input type=submit value="Send Message" />
    </form>
</main>

<style>

</style>
