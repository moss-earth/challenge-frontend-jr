import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import CollapseRow from './CollapseRow';

const OrdersTable = (props) => {
    const {orders, resolveOrder} = props

    return ( 
        <Table size='small' padding='none' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell align='center'>Total (USD)</TableCell>
                    <TableCell align='right'>Aprovação</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map(order => {
                    return (
                        <CollapseRow key={order.id} order={order} resolveOrder={resolveOrder}/>
                    )
                })}
            </TableBody>
        </Table>
     );
}
 
export default OrdersTable;