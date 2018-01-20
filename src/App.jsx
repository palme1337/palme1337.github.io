import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateScore } from './actions/scores';

import './App.css';
import PlayerColumn from './components/PlayerColumn';

class App extends Component {

  render() {
    const {updateScore} = this.props;
    const {player1, player2} = this.props.scores;
    return (
      <div className="App">
        <h1>7 Wonders Duel Score Sheet</h1>
        <PlayerColumn scores={player1}
                      onScoreChange={_.partial(updateScore, "player1")} />
        <PlayerColumn scores={player2}
                      onScoreChange={_.partial(updateScore, "player2")} />
      </div>
    );
  }
}

function mapStateToProps({scores}) {
  return { scores };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({updateScore}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
