import React, { useEffect, useState } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import Header from '../components/Header';
import OrdersTable from '../components/Table/OrdersTable';
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

const OrdersList = () => {
    const [orders, setOrders] = useState([])
    const classes = useStyles()

    useEffect(() => {
        getOrders('orders?_sort=date&_order=desc', setOrders)
    }, [])

    return ( 
        <Container>
            <Header back={true}/>
            <Box style={style} className={classes.tableBox}>
                <Typography className={classes.title} variant='h5' gutterBottom>HISTÓRICO</Typography>
                <OrdersTable orders={orders}/>
            </Box>
        </Container>
     );
}
 
export default OrdersList;
