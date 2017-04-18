import React, { Component } from 'react';
class Button extends Component {

    onHandleClick = () => {
        alert('shit');
    }

    render() {
        return (
            <button onClick={ this.onHandleClick }>
                shit
            </button>
        );
    }
}

export default Button;