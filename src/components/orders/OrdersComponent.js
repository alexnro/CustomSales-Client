import React from 'react';
import { useStyles } from './OrderStyle';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import OrderRow from './OrderRow';
import { connect } from 'react-redux';


const OrdersComponent = props => {
    const classes = useStyles();

    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Order ID</TableCell>
                        <TableCell align="right">Client name</TableCell>
                        <TableCell align="right">Client address</TableCell>
                        <TableCell align="right">Total Price</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.orders ? props.orders.map(order => {
                        return <OrderRow key={order.Id} order={order} />
                    }) : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}


export default connect(mapStateToProps)(OrdersComponent);
