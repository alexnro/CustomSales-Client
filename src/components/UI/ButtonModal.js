import React from 'react';
import { useStyles } from './ModalStyle';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const ButtonModal = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {props.children}
                        <Button onClick={handleClose}>Cancel</Button>
                    </div>
                </Fade>
            </Modal>

            {/* TODO fix warning due to deprecated findDOMNode in strictMode, disabling stricMode fix it but it's a better solution trying to understand 
            refs and forwardRef because is the actual way to solve it */}
            {props.iscart ?
                <ShoppingCartIcon className={classes.shoppingCart} onClick={handleOpen} /> :
                <Button {...props} variant={props.variant ? props.variant : 'text'} color={props.color ? props.color : 'default'} onClick={handleOpen}>
                    {props.buttontext}
                </Button>
            }
        </>
    );
}

export default ButtonModal;
