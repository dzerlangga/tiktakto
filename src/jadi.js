import React, { Component } from 'react';
import Board from './App';
import './squarec.css';

class Game extends Component {
    render() {
        
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                    </div>
                <div className="game-info">
                </div>
            </div>
        );
    }
}

export default Game;