import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aiPlayTurn, playerFirst } from '../actions/gameActions.js';
import { Button, Grid } from 'semantic-ui-react';

class GameButtons extends Component {
    onHandlePlayerFirst = () => {
        this.props.playerFirst();
    };

    onHandleAiFirst = () => {
        this.props.aiFirst();
    };

    render() {
        return (
            <Grid.Row>
                <Grid.Column width={4}>
                    <Button fluid onClick={this.onHandlePlayerFirst}>
                        Player First
                    </Button>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button fluid onClick={this.onHandleAiFirst}>
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
