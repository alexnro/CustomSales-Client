import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './GridMenuStyle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function GridMenuComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <Link className={classes.link} to="/new-order">
                        <Paper className={classes.paper}>Nuevo pedido</Paper>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link className={classes.link} to="/not-developed">
                        <Paper className={classes.paper}>Gestión de pedidos</Paper>
                    </Link>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <Link className={classes.link} to="/products">
                        <Paper className={classes.paper}>Productos</Paper>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link className={classes.link} to="/not-developed">
                        <Paper className={classes.paper}>Gestión de clientes</Paper>
                    </Link>
                </Grid>
            </Grid>
        </div >
    );
}