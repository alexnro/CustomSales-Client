import React from 'react';
import { useStyles } from './OrderStyle';
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ButtonModal from '../UI/ButtonModal';
import DeleteOrderModal from './DeleteOrderModal';


const RowComponent = (props) => {
    const { order } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {order.Id}
                </TableCell>
                <TableCell align="right">{order.Client.Name}</TableCell>
                <TableCell align="right">{order.Client.Address}</TableCell>
                <TableCell align="right">{order.TotalPrice}€</TableCell>
                <TableCell align="right">
                    <ButtonModal buttontext="Delete" color="secondary">
                        <DeleteOrderModal order={order} />
                    </ButtonModal>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Products
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Price per item</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {order.Products.map(product => (
                                        <TableRow key={product.Id}>
                                            <TableCell component="th" scope="row">
                                                {product.Name}
                                            </TableCell>
                                            <TableCell>{product.Price}€</TableCell>
                                            <TableCell align="right">{product.Quantity}</TableCell>
                                            <TableCell align="right">
                                                {(product.Price * product.Quantity).toFixed(2)}€
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default RowComponent;
