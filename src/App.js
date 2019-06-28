import React,{ Component } from 'react';
import Awal from './awal';
import './squarec.css';


class Board extends Component {
  constructor(props){
      super(props);
      this.state = {
        okes : Array(9).fill(null),
        xIsNext: true,
      };
  }

  handleClick(i) {
    const okes = this.state.okes.slice();
    if (calculateWinner(okes) || okes[i]) {
      return;
    }
    okes[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      okes: okes,
      xIsNext: !this.state.xIsNext,
    });
  } //
  
  oke(i){
    return <Awal value={this.state.okes[i]} onClick={() =>this.handleClick(i)} />;
  }

relod(){
      window.location.reload();
    }
  
    render(){
    const winner = calculateWinner(this.state.okes);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      setTimeout(() => {
        alert(winner + " => MENANG");
      }, 900) //memberi waktu
      setTimeout(() => {
       window.location.reload();
      }, 2500)  //ngasih waktu reloade
      
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    
    

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.oke(0)}
          {this.oke(1)}
          {this.oke(2)}
        </div>
        <div className="board-row">
          {this.oke(3)}
          {this.oke(4)}
          {this.oke(5)}
        </div>
        <div className="board-row">
          {this.oke(6)}
          {this.oke(7)}
          {this.oke(8)}
        </div>
        <br />
        <div className="board-row">
        <button onClick={this.relod}>New game</button>
        </div>

      </div>
    );
  }
}


function calculateWinner(okes) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (okes[a] && okes[a] === okes[b] && okes[a] === okes[c]) {
      return okes[a];
    }
  }
  return null;
}

export default Board;