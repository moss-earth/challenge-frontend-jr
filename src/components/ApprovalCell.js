import React from 'react';
import { IconButton, TableCell } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const ApprovalCell = (props) => {
    const { order, resolveOrder } = props

    return ( 
        <TableCell>
            <IconButton edge="end" aria-label="approve" onClick={() => resolveOrder(order, 'approved')}>
                <CheckCircleIcon fontSize="small" style={{ color: "#28A745" }}/>
            </IconButton>
            <IconButton edge="end" aria-label="reject" onClick={() => resolveOrder(order, 'rejected')}>
                <CancelIcon fontSize="small" style={{ color: "#E54712" }}/>
            </IconButton>
        </TableCell>
     );
}
 
export default ApprovalCell;
