import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameTable from './GameTable';
import { Grid, Message } from 'semantic-ui-react';
import GameHeader from '../components/GameHeader';
import GameButtons from './GameButtons';

class App extends Component {
    render() {
        return (
            <Grid container centered textAlign="center">
                <Grid.Row>
                    <Grid.Column width={8}>
                        <GameHeader />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <GameTable />
                    </Grid.Column>
                </Grid.Row>
                <GameButtons />
                <Grid.Row>
                    <Grid.Column width={8}>
                        {this.props.game.winner &&
                            <Message>
                                <Message.Header>
                                    {this.props.game.winner}
                                </Message.Header>
                            </Message>}
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game
});

export default connect(mapStateToProps)(App);
