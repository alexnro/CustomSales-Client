import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import ButtonModal from '../UI/ButtonModal';
import HandleUsersButton from './HandleUsersButtons';
import DeleteUserModal from './DeleteUserModal';


const ClientRow = props => {
    const { user } = props;

    return (
        <React.Fragment>
            <TableRow>
                <TableCell component="th" scope="row">
                    {user.Username}
                </TableCell>
                <TableCell>{user.Email}</TableCell>
                <TableCell>{user.Role === 1 ? "Administrator" : "Agent"}</TableCell>
                <TableCell>
                    <ButtonModal color="primary" variant="outlined" buttontext="Reset Password">
                        <DeleteUserModal user={user} />
                    </ButtonModal>
                </TableCell>
                <TableCell>
                    <HandleUsersButton user={user} />
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default ClientRow;
