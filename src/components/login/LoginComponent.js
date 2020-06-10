import React, { Component } from 'react';
import { withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { styles } from './LoginStyle';


class LoginComponent extends Component {
    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.login}>
                <h2>CustomSales</h2>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Face />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="username" label="Username" type="text" fullWidth autoFocus required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Fingerprint />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="password" label="Password" type="password" fullWidth required />
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: '40px' }}>
                    <Button variant="contained" color="primary">Login</Button>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(LoginComponent);
