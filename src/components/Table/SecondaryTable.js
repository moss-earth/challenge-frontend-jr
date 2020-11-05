import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const SecondaryTable = (props) => {
    const { order } = props
    
    return ( 
        <Table size='small'>
            <TableHead>
                <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell align='center'>Quant.</TableCell>
                    <TableCell align='center'>Preço</TableCell>
                    <TableCell align='right'>Projeto</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell >{order.date}</TableCell>
                    <TableCell align='center'>{order.qnt}</TableCell>
                    <TableCell align='center'>{order.price}</TableCell>
                    <TableCell align='right'>{order.project}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
     );
}
 
export default SecondaryTable;
