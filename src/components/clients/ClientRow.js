import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import HandleClientsButton from './handleClients/HandleClientButtons';
import ButtonModal from '../UI/ButtonModal';
import SelectProductsModal from './handleClients/SelectProductsModal';


const ClientRow = props => {
    const { client } = props;

    return (
        <React.Fragment>
            <TableRow>
                <TableCell component="th" scope="row">
                    {client.Name}
                </TableCell>
                <TableCell>{client.Address}</TableCell>
                <TableCell>{client.PhoneNumber}</TableCell>
                <TableCell>
                    <ButtonModal variant="outlined" buttontext="Active products">
                        <SelectProductsModal />
                    </ButtonModal>
                </TableCell>
                <TableCell>
                    <HandleClientsButton client={client} />
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default ClientRow;
