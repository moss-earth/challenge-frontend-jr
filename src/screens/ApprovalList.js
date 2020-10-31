import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Box, Container, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Header from '../components/header';
import { transformDate } from '../functions/transformDate';

const style = {
    paddingTop: '10vh'
}

const ApprovalList = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getPendingOrders()
    }, [])

    const getPendingOrders = () => {
        axios.get('http://localhost:3003/orders?status=under_approval')
        .then((response) => {
            setOrders(response.data)
        }).catch(error => console.log(error))
    }

    const resolveOrder = (order, newStatus) => {
        console.log(order, newStatus)
        const body = {...order, status: newStatus}
        axios.put(`http://localhost:3003/orders/${order.id}`, body)
        .then((response) => {
            getPendingOrders()
        }).catch(error => console.log(error))
    }

    return ( 
        <Container>
            <Header text={'aprovação'}/>
            <Box style={style}>
                <Typography variant="h5" gutterBottom>compras pendentes</Typography>
                <Table size='small' padding="none">
                    <TableHead>
                        <TableRow>
                            <TableCell>Projeto</TableCell>
                            <TableCell>Qnt</TableCell>
                            <TableCell>(USD)</TableCell>
                            <TableCell>Criada em</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map(order => {
                            return (
                                <TableRow key={order.id}>
                                    <TableCell>{order.project}</TableCell>
                                    <TableCell>{order.qnt}</TableCell>
                                    <TableCell>{order.price}</TableCell>
                                    <TableCell>{transformDate(order.date)}</TableCell>
                                    <TableCell>
                                        <IconButton edge="end" aria-label="approve" onClick={() => resolveOrder(order, 'approved')}>
                                            <CheckCircleIcon fontSize="small" style={{ color: "#28A745" }}/>
                                        </IconButton>
                                        <IconButton edge="end" aria-label="reject" onClick={() => resolveOrder(order, 'rejected')}>
                                            <CancelIcon fontSize="small" style={{ color: "#E54712" }}/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Box>
        </Container>
     );
}
 
export default ApprovalList;