import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import GameTableCell from './GameTableCell';

class GameTable extends Component {
    render() {
        const rows = [];
        for (let i = 0; i < 3; ++i) {
            let cells = [];
            for (let j = 0; j < 3; ++j) {
                cells.push(<GameTableCell key={i * 3 + j} index={i * 3 + j} />);
            }
            rows.push(
                <Table.Row key={i}>
                    {cells}
                </Table.Row>
            );
        }

        return (
            <Table compact>
                <Table.Body>
                    {rows}
                </Table.Body>
            </Table>
        );
    }
}

export default GameTable;
