import React, { useState } from 'react';
import { useStyles } from './ModalStyle';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Select, MenuItem, List, ListItem, FormControl } from '@material-ui/core';
import { connect } from 'react-redux';


const SelectClientModal = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [client, setClient] = useState();
    const handleChange = (event) => {
        setClient(event.target.value);
    }

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
                        <h2>Select client:</h2>
                        <List>
                            <ListItem>
                                <FormControl className={classes.formControl} variant="outlined">
                                    <Select
                                        onChange={handleChange}
                                        value={client}
                                    >
                                        {props.clients ? props.clients.map(client => {
                                            return (
                                                <MenuItem value={client} key={client.Id}>{client.Name}</MenuItem>
                                            )
                                        }) : null}
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                <Button className={classes.continueButton} variant="outlined" color="primary">Continue</Button>
                                <Button onClick={handleClose}>Cancel</Button>
                            </ListItem>
                        </List>
                    </div>
                </Fade>
            </Modal>

            {/* TODO fix warning due to deprecated findDOMNode in strictMode, disabling stricMode fix it but it's a better solution trying to understand 
            refs and forwardRef because is the actual way to solve it */}
            <Paper className={classes.menuPaper} onClick={handleOpen} >Nuevo pedido</Paper>
        </>
    );
}

const mapStateToProps = state => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(SelectClientModal);
