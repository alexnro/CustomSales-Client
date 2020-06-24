import React from 'react';
import { Divider, Button } from '@material-ui/core';
import { useStyles } from './OrderStyle';
import axios from '../../axiosBaseUrl';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';


const DeleteOrderModal = props => {
    const classes = useStyles();

    const deleteOrder = () => {
        axios.delete("/orders?orderId=" + props.order.Id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    const handleDelete = () => {
        deleteOrder();
        props.deleteOrder(props.order.Id);
    }

    return (
        <>
            <h2>Do you really want to delete this order?</h2>
            <Divider className={classes.modalDivider} />
            <Button onClick={handleDelete} color="secondary">Delete</Button>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        deleteOrder: orderId => dispatch({ type: actionTypes.DELETE_ORDER, orderId: orderId })
    }
}

export default connect(null, mapDispatchToProps)(DeleteOrderModal);
