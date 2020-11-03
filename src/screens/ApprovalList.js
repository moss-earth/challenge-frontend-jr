import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Box, Container, Typography } from '@material-ui/core';
import Header from '../components/Header';
import OrdersTable from '../components/OrdersTable';
import EmptyTable from '../components/EmptyTable';
import { style } from './styles';

const ApprovalList = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getPendingOrders()
    }, [])

    const getPendingOrders = () => {
        axios.get('http://localhost:3004/orders?status=under_approval&_sort=date&_order=asc')
        .then((response) => {
            setOrders(response.data)
        }).catch(error => console.log(error))
    }

    const resolveOrder = (order, newStatus) => {
        const body = {...order, status: newStatus}
        axios.put(`http://localhost:3004/orders/${order.id}`, body)
        .then((response) => {
            getPendingOrders()
        }).catch(error => console.log(error))
    }

    return ( 
        <Container>
            <Header back={true}/>
            <Box style={style}>
                <Typography variant="h5" gutterBottom>compras pendentes</Typography>
                {orders.length === 0 ? <EmptyTable/> : <OrdersTable orders={orders} resolveOrder={resolveOrder}/>}
            </Box>
        </Container>
     );
}
 
export default ApprovalList;
