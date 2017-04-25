import React, { Component } from 'react';
import GameTable from './GameTable';
import { Grid } from 'semantic-ui-react';
import GameHeader from '../components/GameHeader';
import GameButtons from './GameButtons';

class App extends Component {
    render() {
        return (
            <Grid container centered>
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
            </Grid>
        );
    }
}

export default App;
