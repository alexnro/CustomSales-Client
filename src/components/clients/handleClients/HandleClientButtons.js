import React from 'react';
import { ButtonGroup } from '@material-ui/core';
import ButtonModal from '../../UI/ButtonModal';
import ClientFormModal from './ClientFormModal';
import DeleteClientModal from './DeleteClientModal';


const HandleClientButtons = props => {
    return (
        <ButtonGroup>
            <ButtonModal color="primary" buttontext="Modify">
                <ClientFormModal client={props.client} />
            </ButtonModal>
            <ButtonModal color="secondary" buttontext="Delete">
                <DeleteClientModal client={props.client} />
            </ButtonModal>
        </ButtonGroup>
    )
}

export default HandleClientButtons;