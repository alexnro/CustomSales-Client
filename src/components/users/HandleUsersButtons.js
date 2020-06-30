import React from 'react'
import { ButtonGroup } from '@material-ui/core';
import ButtonModal from '../UI/ButtonModal';
import UsersFormModal from './UsersFormModal';


const HandleUsersButtons = props => {
    return (
        <ButtonGroup>
            <ButtonModal color="primary" buttontext="Modify">
                <UsersFormModal user={props.user} />
            </ButtonModal>
            <ButtonModal color="secondary" buttontext="Delete">

            </ButtonModal>
        </ButtonGroup>
    )
}

export default HandleUsersButtons;
