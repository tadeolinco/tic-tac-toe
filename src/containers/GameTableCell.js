import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playTurn } from '../actions/gameActions';
import { Table, Button } from 'semantic-ui-react';

class GameTableCell extends Component {
    onHandleClick = () => {
        if (
            this.props.game.board[this.props.index] === '-' &&
            this.props.game.playing
        ) {
            this.props.playTurn(this.props.index);
        }
    };

    render() {
        return (
            <Table.Cell>
                <Button
                    fluid
                    style={{
                        fontFamily: 'monospace'
                    }}
                    size="massive"
                    disabled={!this.props.game.playing}
                    onClick={this.onHandleClick}>
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
