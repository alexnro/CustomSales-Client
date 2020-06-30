import React from 'react'
import { ButtonGroup } from '@material-ui/core';
import ButtonModal from '../UI/ButtonModal';
import UsersFormModal from './UsersFormModal';
import DeleteUserModal from './DeleteUserModal';


const HandleUsersButtons = props => {
    return (
        <ButtonGroup>
            <ButtonModal color="primary" buttontext="Modify">
                <UsersFormModal user={props.user} />
            </ButtonModal>
            <ButtonModal color="secondary" buttontext="Delete">
                <DeleteUserModal user={props.user} />
            </ButtonModal>
        </ButtonGroup>
    )
}

export default HandleUsersButtons;
