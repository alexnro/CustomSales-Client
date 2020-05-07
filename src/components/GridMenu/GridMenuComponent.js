import React from 'react';
import useStyles from './GridMenuStyle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function GridMenuComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Nuevo pedido</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Gestión de pedidos</Paper>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Productos</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Gestión de clientes</Paper>
                </Grid>
            </Grid>
        </div>
    );
}