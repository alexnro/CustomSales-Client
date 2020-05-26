import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useStyles } from './styles/HandleProductStyle';

const HandleProductButtons = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button>Modify</Button>
                <Button color="secondary">Delete</Button>
            </ButtonGroup>
        </div>
    )
}

export default HandleProductButtons;
