import React, { useEffect, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { style } from './styles';
import OrderCard from '../components/OrderCard';


const OrdersDetail = () => {
    const params = useParams()
    const [order, setOrder] = useState({})

    const getOrderDetail = (id) => {
        axios.get(`http://localhost:3004/orders/${id}`)
        .then((response) => {
            setOrder(response.data)
        })
    }

    useEffect(() => {
        getOrderDetail(params.id)
    }, [params.id])

    return ( 
        <Container maxWidth="sm">
            <Header back={true}/>
            <Box style={style}>
                <OrderCard order={order}/>
            </Box>
        </Container>
     );
}
 
export default OrdersDetail;
