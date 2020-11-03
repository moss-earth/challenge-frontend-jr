import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Box, Container, Typography } from '@material-ui/core';
import Header from '../components/Header';
import OrdersTable from '../components/OrdersTable';
import { style } from './styles';

const OrdersList = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = () => {
        axios.get('http://localhost:3004/orders?_sort=date&_order=desc')
        .then((response) => {
            setOrders(response.data)
        }).catch(error => console.log(error))
    }

    return ( 
        <Container>
            <Header back={true}/>
            <Box style={style}>
                <Typography variant="h5" gutterBottom>histórico</Typography>
                <OrdersTable orders={orders}/>
            </Box>
        </Container>
     );
}
 
export default OrdersList;