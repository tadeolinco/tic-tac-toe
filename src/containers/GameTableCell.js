import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playTurn } from '../actions/gameActions';
import { Table, Button } from 'semantic-ui-react';

class GameTableCell extends Component {
    onHandleClick = () => {
        if (!this.props.game.board[this.props.index]) {
            this.props.playTurn(this.props.index);
        }
    };

    render() {
        return (
            <Table.Cell>
                <Button fluid size="massive" onClick={this.onHandleClick}>
                    {this.props.game.board[this.props.index]}
                </Button>
            </Table.Cell>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game
});

const mapDispatchToProps = dispatch => ({
    playTurn: index => {
        dispatch(playTurn(index));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameTableCell);
