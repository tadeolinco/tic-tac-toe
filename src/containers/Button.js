import React, { Component } from 'react';
class Button extends Component {

    constructor(){
      super();
      this.state={data: "test"}
    }
    btnClick(turn, change){
      if(turn === 1){
        this.setState({data:"X"});
      }else{
        this.setState({data:"O"});
      }
      change();
    }

    render() {
        return (
            <button onClick={ () => this.btnClick(this.props.turn, this.props.changeTurn)}>
              {this.state.data}
            </button>
        );
    }
}

export default Button;
