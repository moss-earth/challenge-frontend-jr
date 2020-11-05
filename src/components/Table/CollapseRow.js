import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Collapse, IconButton, makeStyles, TableCell, TableRow, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { goToOrder } from '../../router/coordinator';
import ApprovalCell from './ApprovalCell';
import SecondaryTable from './SecondaryTable';
import { transformStatus } from '../../functions/transformDate';

const useStyles = makeStyles((theme) => ({
    collpaseCell: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    collapseTitle: {
        marginLeft: theme.spacing(2)
    }
}))

const CollapseRow = (props) => {
    const history = useHistory()
    const classes = useStyles()
    const [openDetails, setOpenDetails] = useState(false)
    const {order, resolveOrder} = props

    return ( 
        <Fragment key={order.id}>
            <TableRow data-testid='order'>
                <TableCell>
                    <IconButton size='small' onClick={() => setOpenDetails(!openDetails)}>
                        {openDetails ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell data-testid='order-id' onClick={() => goToOrder(history, order.id)}>{order.id}</TableCell>
                <TableCell align='center'>{order.qnt*order.price}</TableCell>
                {resolveOrder ? <ApprovalCell order={order} resolveOrder={resolveOrder}/> : 
                    <TableCell align='right'>{transformStatus(order.status)}</TableCell>}
            </TableRow>
            <TableRow>
                <TableCell colSpan={4}>
                    <Collapse in={openDetails} unmountOnExit className={classes.collpaseCell}>
                        <Box marginLeft={1} marginRight={1}>
                            <Typography variant='body1' gutterBottom className={classes.collapseTitle}>Detalhes da ordem</Typography>
                            <SecondaryTable order={order}/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
     );
}
 
export default CollapseRow;
