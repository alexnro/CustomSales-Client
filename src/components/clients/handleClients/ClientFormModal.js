import React, { useState } from 'react';
import { useStyles } from './ClientModalsStyle';
import { Button, List, ListItem, TextField } from '@material-ui/core';
import axios from '../../../axiosBaseUrl';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';


const ClientFormModal = props => {
    const classes = useStyles();
    const client = props.client;

    const [clientData, setClientData] = useState({
        "Name": client ? client.Name : "",
        "Address": client ? client.Address : "",
        "PhoneNumber": client ? client.PhoneNumber : ""
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setClientData(prevState => ({ ...prevState, [name]: value }));
    }

    const dataNotEmtpy = () => {
        for (const data of Object.values(clientData)) {
            if (data === undefined || data === "") {
                return false;
            }
        }
        return true;
    }

    const addNewClient = () => {
        if (dataNotEmtpy()) {
            axios.post("/clients", clientData, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
                .then(response => {
                    console.log(response);
                    clientData.Id = response.data.Id;
                    clientData.VisibleProducts = response.data.VisibleProducts;
                    props.addClient(clientData);
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            alert("You need to fill all labels!");
        }
    }

    const handleUpdate = () => {
        if (dataNotEmtpy()) {
            clientData.Id = clientData.Id ? clientData.Id : client.Id;
            axios.put("/clients", clientData, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
                .then(response => {
                    console.log(response);
                    props.updateClient(clientData);
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            alert("You need to fill all labels!");
        }
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

const mapDispatchToProps = dispatch => {
    return {
        addClient: client => dispatch({ type: actionTypes.ADD_CLIENT, client: client }),
        updateClient: client => dispatch({ type: actionTypes.UPDATE_CLIENT, client: client })
    }
}

export default connect(null, mapDispatchToProps)(ClientFormModal);
