import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { transformDate, transformStatus } from '../functions/transformDate';

const style = {
    marginTop: '15vh'
}

const OrdersDetail = () => {
    const pathParams = useParams()
    const [order, setOrder] = useState({})

    const getOrderDetail = (id) => {
        axios.get(`http://localhost:3004/orders/${id}`)
        .then((response) => {
            setOrder(response.data)
        })
    }

    useEffect(() => {
        getOrderDetail(pathParams.id)
    }, [pathParams.id])

    return ( 
        <Container maxWidth="sm">
            <Header text={'detalhes'}/>
            <Paper style={style}>
                <Grid container direction="column" justify="space-between">
                    <Grid item>
                        <Typography variant="h6">{order.project}</Typography>
                        <Typography variant="h6">{transformDate(order.date)}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="textSecondary">Quantidade</Typography>
                        <Typography variant="body1">{order.qnt}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="textSecondary">Preço</Typography>
                        <Typography variant="body1">US${order.price}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="textSecondary">Valor total</Typography>
                        <Typography variant="body1">US${order.price*order.qnt}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">{transformStatus(order.status)}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
     );
}
 
export default OrdersDetail;