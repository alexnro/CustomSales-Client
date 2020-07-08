import React, { useState } from 'react'
import { useStyles } from './PasswordModalStyle';
import { List, ListItem, TextField, Button } from '@material-ui/core';
import axios from '../../axiosBaseUrl';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';


const CreatePasswordModal = props => {
    const classes = useStyles();

    const [userData, setUserData] = useState({
        "Username": "",
        "Password": "",
        "RepeatedPassword": ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));
    }

    const dataNotEmtpy = () => {
        for (const entry of Object.entries(userData)) {
            if (entry[1] === undefined || entry[1] === "") {
                return false;
            }
        }
        return true;
    }

    const comparePasswords = () => {
        if (userData.Password === userData.RepeatedPassword) {
            return true;
        }
        return false;
    }

    const handleCreatePassword = () => {
        if (!dataNotEmtpy()) {
            alert("You need to fill all inputs!");
        } else if (!comparePasswords()) {
            alert("Password and repeated password are not the same!");
        } else {
            axios.post("/users/createPassword", userData)
                .then(response => {
                    console.log(response);
                    props.loginUser(response.data);
                    localStorage.setItem("token", response.data.Token);
                    props.exitLogin();
                })
                .catch(error => {
                    console.log(error);
                    alert("Username not exists or already has a password!");
                })
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
                        <p className={classes.label}>Password: </p>
                        <TextField
                            className={classes.input}
                            required
                            type="password"
                            label="Password"
                            variant="outlined"
                            name="Password"
                            value={userData.Password}
                            onChange={handleChange}
                        />
                    </ListItem>
                    <ListItem>
                        <p className={classes.label}>Repeat Password: </p>
                        <TextField
                            className={classes.input}
                            required
                            type="password"
                            label="Repeat Password"
                            variant="outlined"
                            name="RepeatedPassword"
                            value={userData.RepeatedPassword}
                            onChange={handleChange}
                        />
                    </ListItem>
                </List>
            </form>
            <Button className={classes.addButton} onClick={handleCreatePassword} variant="outlined" color="primary">
                Create password
            </Button>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch({ type: actionTypes.LOGIN_USER, user: user })
    }
}

export default connect(null, mapDispatchToProps)(CreatePasswordModal);
