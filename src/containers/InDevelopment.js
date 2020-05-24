import React from 'react';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    dev: {
        marginTop: "7%",
        color: "white"
    }
}));

const InDevelopment = () => {

    const classes = useStyles();

    return (
        <div className={classes.dev}>
            <p>¡AÚN EN DESARROLLO!</p>
        </div>
    )
}


export default InDevelopment;
