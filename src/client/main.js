import PlayerName from './PlayerName.svelte';

const playerName = new PlayerName({
	target: document.querySelector('section#player-name'),
	props: {
		socket,
	}
});

export default playerName;
