import React from 'react';
import { useStyles } from './ClientsStyle';
import { TableCell, TableRow } from '@material-ui/core';
import ButtonModal from '../UI/ButtonModal';

const ClientRow = props => {
    const { client } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell component="th" scope="row">
                    {client.Name}
                </TableCell>
                <TableCell>{client.Address}</TableCell>
                <TableCell>{client.PhoneNumber}</TableCell>
                <TableCell>
                    <ButtonModal buttontext="Delete" color="secondary">
                    </ButtonModal>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default ClientRow;
