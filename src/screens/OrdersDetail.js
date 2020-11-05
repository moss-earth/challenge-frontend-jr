import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import { getOrderDetail } from '../requests';
import { style } from './styles';


const OrdersDetail = () => {
    const params = useParams()
    const [order, setOrder] = useState({})

    useEffect(() => {
        getOrderDetail(params.id, setOrder)
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
