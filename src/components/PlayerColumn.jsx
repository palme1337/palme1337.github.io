import React from 'react';
import types from '../model/scoring-types';
import ScoringRow from './ScoringRow';

export default class PlayerColumn extends React.PureComponent {
  render() {
    const {scores, onScoreChange} = this.props;

    return <div className='player-card'>
      {types.map((type, index) =>
        <ScoringRow {...{type, index, onChange: onScoreChange}}/>)}
      <div className='score-row total'>
        <label>Σ</label>
        <div>{this.calculateTotal(scores)}</div>
      </div>
    </div>
  }

  calculateTotal(scores) {
    return _.values(scores)
      .reduce((memo, value) => memo + value, 0);
  }
}
