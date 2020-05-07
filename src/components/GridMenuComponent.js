import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function GridMenuComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
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
            </Grid>
        </div>
    );
}