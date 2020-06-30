import React from 'react';
import { useStyles } from './UsersStyle';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import UserRow from './UserRow';
import AddUserButton from './AddUserButton';


const UsersComponet = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AddUserButton />
            <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users ? props.users.map(user => {
                            return <UserRow key={user.Id} user={user} />
                        }) : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UsersComponet);
