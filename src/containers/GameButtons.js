import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aiPlayTurn, playerFirst } from '../actions/gameActions.js';
import { Button, Grid } from 'semantic-ui-react';

class GameButtons extends Component {
    onHandlePlayerFirst = () => {
        if (!this.props.game.playing) {
            this.props.playerFirst();
        }
    };

    onHandleAiFirst = () => {
        if (!this.props.game.playing) {
            this.props.aiFirst();
        }
    };

    render() {
        return (
            <Grid.Row>
                <Grid.Column width={4}>
                    <Button
                        fluid
                        disabled={this.props.game.playing}
                        onClick={this.onHandlePlayerFirst}>
                        Player First
                    </Button>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button
                        fluid
                        disabled={this.props.game.playing}
                        onClick={this.onHandleAiFirst}>
                        AI First
                    </Button>
                </Grid.Column>
            </Grid.Row>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game
});

const mapDispatchToProps = dispatch => ({
    aiFirst: () => {
        dispatch(aiPlayTurn());
    },
    playerFirst: () => {
        dispatch(playerFirst());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameButtons);
