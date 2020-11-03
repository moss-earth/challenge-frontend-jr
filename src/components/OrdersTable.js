import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { transformDate, transformStatus } from '../functions/transformDate';
import ApprovalCell from './ApprovalCell';
import { goToOrder } from '../router/coordinator';
import { useHistory } from 'react-router-dom';

const OrdersTable = (props) => {
    const history = useHistory()
    const {orders, resolveOrder} = props

    return ( 
        <Table size='small' padding="none">
            <TableHead>
                <TableRow>
                    <TableCell>Projeto</TableCell>
                    <TableCell>Qnt</TableCell>
                    <TableCell>(USD)</TableCell>
                    <TableCell>Criada em</TableCell>
                    <TableCell>Aprovação</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map(order => {
                    return (
                        <TableRow key={order.id}>
                            <TableCell onClick={() => goToOrder(history, order.id)}>{order.project}</TableCell>
                            <TableCell>{order.qnt}</TableCell>
                            <TableCell>{order.price}</TableCell>
                            <TableCell>{transformDate(order.date)}</TableCell>
                    {resolveOrder ? <ApprovalCell order={order} resolveOrder={resolveOrder}/> : <TableCell>{transformStatus(order.status)}</TableCell>}
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
     );
}
 
export default OrdersTable;
