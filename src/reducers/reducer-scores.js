import { UPDATE_SCORE } from '../actions/scores';

const initialScores = {
  player1: {},
  player2: {}
};
export default function scores(state = initialScores, { type, scoreType, value, player }) {
  switch (type) {
    case UPDATE_SCORE:
      return _.set(Object.assign({}, state),`${player}.${scoreType.name}`,value)
    default:
      return state;
  }
}
