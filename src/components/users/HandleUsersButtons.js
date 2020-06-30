import React from 'react'
import { ButtonGroup } from '@material-ui/core';
import ButtonModal from '../UI/ButtonModal';


const HandleUsersButtons = () => {
    return (
        <ButtonGroup>
            <ButtonModal color="primary" buttontext="Modify">

            </ButtonModal>
            <ButtonModal color="secondary" buttontext="Delete">

            </ButtonModal>
        </ButtonGroup>
    )
}

export default HandleUsersButtons;
