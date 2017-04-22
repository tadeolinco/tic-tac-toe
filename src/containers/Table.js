import React, { Component } from 'react';
import Button from './Button';
class Table extends Component {
  constructor(){
    super();
    this.state ={
      turn: 0
    };
  }
  changeTurn(){
    if(this.state.turn === 0){
      this.setState({
        turn:1
      });
    }else{
      this.setState({
        turn:0
      });
    }
  }


    render() {
        return (
            <table>
              <tr>
                <td><Button turn={this.state.turn} changeTurn={() => this.changeTurn()}/></td>
                <td><Button turn={this.state.turn} changeTurn={() => this.changeTurn()}/></td>
                <td><Button turn={this.state.turn} changeTurn={() => this.changeTurn()}/></td>
              </tr>
              <tr>
                <td><Button turn={this.state.turn} changeTurn={() => this.changeTurn()}/></td>
                <td><Button turn={this.state.turn} changeTurn={() => this.changeTurn()}/></td>
                <td><Button turn={this.state.turn} changeTurn={() => this.changeTurn()}/></td>
              </tr>
              <tr>
                <td><Button turn={this.state.turn} changeTurn={() => this.changeTurn()}/></td>
                <td><Button turn={this.state.turn} changeTurn={() => this.changeTurn()}/></td>
                <td><Button turn={this.state.turn} changeTurn={() => this.changeTurn()}/></td>
              </tr>
            </table>
        );
    }
}

export default Table;
