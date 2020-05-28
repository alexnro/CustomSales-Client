import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useStyles } from '../styles/HandleProductStyle';
import ButtonModal from '../../UI/ButtonModal';
import ProductFormModal from '../modal/ProductFormModal';


const HandleProductButtons = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" aria-label="contained primary button group">
                <ButtonModal buttontext="Modify">
                    <ProductFormModal productdata={props.productdata} />
                </ButtonModal>
                <Button color="secondary">Delete</Button>
            </ButtonGroup>
        </div>
    )
}

export default HandleProductButtons;
