import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './GridMenuStyle';
import { Paper, Grid } from '@material-ui/core';
import SelectClientModal from '../UI/SelectClientModal';
import { connect } from 'react-redux';


const GridMenuComponent = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <SelectClientModal gridmenu />
                </Grid>
                <Grid item xs={4}>
                    <Link className={classes.link} to="/orders">
                        <Paper className={classes.paper}>Orders management</Paper>
                    </Link>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <Link className={classes.link} to="/products">
                        <Paper className={classes.paper}>Products</Paper>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link className={classes.link} to="/clients">
                        <Paper className={classes.paper}>Clients management</Paper>
                    </Link>
                </Grid>
            </Grid>
            {props.user.Role === 1 ?
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={8}>
                        <Link className={classes.link} to="/users">
                            <Paper className={classes.paper}>Users management</Paper>
                        </Link>
                    </Grid>
                </Grid>
                : null}
        </div >
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(GridMenuComponent);
