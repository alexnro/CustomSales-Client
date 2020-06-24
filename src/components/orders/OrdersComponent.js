import React from 'react';
import { useStyles } from './OrderStyle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RowComponent from './RowComponent';
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
                        return <RowComponent key={order.Id} order={order} />
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
