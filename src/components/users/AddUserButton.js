import React from 'react'
import ButtonModal from '../UI/ButtonModal';
import UsersFormModal from './UsersFormModal';
import { useStyles } from './UserModalsStyle';


const AddUserButton = props => {
    const classes = useStyles();

    return (
        <ButtonModal className={classes.addButton} variant="contained" color="primary" buttontext="Add User">
            <UsersFormModal adduser />
        </ButtonModal>
    )
}

export default AddUserButton;
