import React, { useState } from 'react';
import { useStyles } from './UserModalsStyle';
import { Button, List, ListItem, TextField, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import axios from '../../axiosBaseUrl';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';


const UsersFormModal = props => {
    const classes = useStyles();
    const user = props.user;

    const [userData, setUserData] = useState({
        "Username": user ? user.Username : "",
        "Email": user ? user.Email : "",
        "Role": user ? user.Role : ""
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));
    }

    const dataNotEmtpy = () => {
        for (const data of Object.values(userData)) {
            if (data === undefined || data === "") {
                return false;
            }
        }
        return true;
    }

    const addNewUser = () => {
        if (dataNotEmtpy()) {
            axios.post("/users", userData, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
                .then(response => {
                    console.log(response);
                    userData.Id = response.data.Id;
                    props.addUser(userData);
                    alert("User added!");
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
            userData.Id = userData.Id ? userData.Id : user.Id;
            axios.put("/users", userData, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
                .then(response => {
                    console.log(response);
                    props.updateUser(userData);
                    alert("User updated!");
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
                        <p className={classes.label}>Username: </p>
                        <TextField
                            className={classes.input}
                            required
                            label="Username"
                            variant="outlined"
                            name="Username"
                            value={userData.Username}
                            onChange={handleChange}
                        />
                    </ListItem>
                    <ListItem>
                        <p className={classes.label}>Email: </p>
                        <TextField
                            type="email"
                            className={classes.input}
                            required
                            label="Email"
                            variant="outlined"
                            name="Email"
                            value={userData.Email}
                            onChange={handleChange}
                        />
                    </ListItem>
                    <ListItem>
                        <p className={classes.label}>Role: </p>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Role</InputLabel>
                            <Select name="Role" onChange={handleChange} value={userData.Role}>
                                <MenuItem value={0}>Agent</MenuItem>
                                <MenuItem value={1}>Administrator</MenuItem>
                            </Select>
                        </FormControl>
                    </ListItem>
                </List>
            </form>
            <Button onClick={props.adduser ? addNewUser : handleUpdate} className={classes.addButton} variant="outlined" color="primary">
                {props.adduser ? "Add User" : "Modify User"}
            </Button>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: user => dispatch({ type: actionTypes.ADD_USER, user: user }),
        updateUser: user => dispatch({ type: actionTypes.UPDATE_USER, user: user })
    }
}

export default connect(null, mapDispatchToProps)(UsersFormModal);
