import React from 'react';
import { useStyles } from './ClientsStyle';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import ClientRow from './ClientRow';


const ClientsComponent = props => {
    const classes = useStyles();

    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell>Client name</TableCell>
                        <TableCell>Client address</TableCell>
                        <TableCell>Phone number</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.clients ? props.clients.map(client => {
                        return <ClientRow key={client.Id} client={client} />
                    }) : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = state => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(ClientsComponent);
