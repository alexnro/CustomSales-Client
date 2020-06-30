import React from 'react'
import ButtonModal from '../UI/ButtonModal';
import { useStyles } from './UsersStyle';


const AddUserButton = props => {
    const classes = useStyles();

    return (
        <ButtonModal className={classes.addButton} variant="contained" color="primary" buttontext="Add User">

        </ButtonModal>
    )
}

export default AddUserButton;
