module.exports = (state, store) => {
    const length = state.players.length;
    const isGameReady = state.config.isGameReady;

    if (
        (length > 1 && !isGameReady) ||
        (length < 2 && isGameReady)
    ) {
        store.dispatch({
            type: 'is:game:ready',
            payload: {
                isGameReady: !isGameReady,
            },
        });
    }
};
