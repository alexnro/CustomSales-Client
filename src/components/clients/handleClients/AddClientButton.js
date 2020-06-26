import React from 'react';
import ButtonModal from '../../UI/ButtonModal';
import ClientFormModal from './ClientFormModal';
import { useStyles } from './ClientModalsStyle';


const AddClientButton = props => {
    const classes = useStyles();

    return (
        <ButtonModal className={classes.openButton} variant="contained" color="primary" buttontext="Add Client">
            <ClientFormModal addclient />
        </ButtonModal>
    );
}

export default AddClientButton;
