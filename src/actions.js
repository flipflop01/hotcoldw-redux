export GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generalAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
});

export RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
    type: RESTART_GAME,
    correctAnswer
});

export MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = () => ({
    type: MAKE_GUESS,
    guess
});

