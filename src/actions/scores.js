export const UPDATE_SCORE = 'UPDATE_SCORE';

export const updateScore = (player, scoreType, value) => {
  return {
    player,
    scoreType,
    type: UPDATE_SCORE,
    value
  }
}
