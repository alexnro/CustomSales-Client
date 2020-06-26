import React, { useState } from 'react';
import { useStyles } from './ClientModalsStyle';
import { Button, List, ListItem, TextField } from '@material-ui/core';


const ClientFormModal = props => {
    const classes = useStyles();
    const client = props.client;

    const [clientData, setClientData] = useState({
        "Name": client ? client.Name : undefined,
        "Address": client ? client.Address : undefined,
        "PhoneNumber": client ? client.PhoneNumber : undefined
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setClientData(prevState => ({ ...prevState, [name]: value }));
    }

    const addNewClient = () => {

    }

    const handleUpdate = () => {

    }

    return (
        <>
            <form className={classes.root} autoComplete="off">
                <List>
                    <ListItem>
                        <p className={classes.label}>Client name: </p>
                        <TextField
                            className={classes.input}
                            required
                            label="Client Name"
                            variant="outlined"
                            name="Name"
                            value={clientData.Name}
                            onChange={handleChange}
                        />
                    </ListItem>
                    <ListItem>
                        <p className={classes.label}>Address: </p>
                        <TextField
                            className={classes.input}
                            required
                            label="Address"
                            variant="outlined"
                            name="Address"
                            value={clientData.Address}
                            onChange={handleChange}
                        />
                    </ListItem>
                    <ListItem>
                        <p className={classes.label}>Phone Number: </p>
                        <TextField
                            className={classes.input}
                            required
                            type="number"
                            label="Phone number"
                            variant="outlined"
                            name="PhoneNumber"
                            value={clientData.PhoneNumber}
                            onChange={handleChange}
                        />
                    </ListItem>
                </List>
            </form>
            <Button onClick={props.addclient ? addNewClient : handleUpdate} className={classes.addButton} variant="outlined" color="primary">
                {props.addclient ? "Add Client" : "Modify Client"}
            </Button>
        </>
    )
}

export default ClientFormModal;
