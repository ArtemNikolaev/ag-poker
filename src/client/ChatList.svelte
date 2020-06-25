<script>
	export let socket;
	let chat = [];

	socket.on('update', data => {
        chat = data.chat;
    });
</script>

<main>
    <ul>
        {#each chat as content}
            <li>{content.name}: {content.msg}</li>
        {/each}
    </ul>
</main>

<style>
    ul {
        list-style-type: none;
    }
</style>
