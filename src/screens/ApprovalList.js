import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import Header from '../components/Header';
import OrdersTable from '../components/Table/OrdersTable';
import EmptyTable from '../components/Table/EmptyTable';
import { getOrders } from '../requests';
import { style } from './styles';

const useStyles = makeStyles((theme) => ({
    tableBox: {
      [theme.breakpoints.up('md')]: {
        maxWidth: '70%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    title: {
        marginBottom: theme.spacing(3)
    }
  }));

const ApprovalList = () => {
    const [pendingOrders, setPendingOrders] = useState([])
    const classes = useStyles()

    useEffect(() => {
        getOrders('orders?status=under_approval&_sort=date&_order=asc', setPendingOrders)
    }, [])
    
    const resolveOrder = (order, newStatus) => {
        const body = {...order, status: newStatus}
        axios.put(`${process.env.REACT_APP_BASE_URL}/orders/${order.id}`, body)
        .then((response) => {
            getOrders('orders?status=under_approval&_sort=date&_order=asc', setPendingOrders)
        }).catch(error => console.log(error))
    }

    return ( 
        <Container>
            <Header back={true}/>
            <Box style={style} className={classes.tableBox}>
                <Typography className={classes.title} variant='h5' gutterBottom>ORDENS PENDENTES</Typography>
                {pendingOrders.length === 0 ? <EmptyTable/> : <OrdersTable data-testid='order' orders={pendingOrders} resolveOrder={resolveOrder}/>}
            </Box>
        </Container>
     );
}
 
export default ApprovalList;
