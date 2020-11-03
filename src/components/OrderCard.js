import React from 'react';
import { Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { transformDate, transformStatus } from '../functions/transformDate';

const useStyles = makeStyles((theme) => ({
    paper: {
        paddingRight: "12px",
        paddingLeft: "12px"
    }
}))

const OrderCard = (props) => {
    const { order } = props
    const classes = useStyles()

    return ( 
        <Paper className={classes.paper}>
            <Grid container direction="column" justify="space-between" spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h5">detalhes da ordem</Typography>
                </Grid>
                <Divider variant="middle"/>
                <Grid container item xs={12} justify="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h6">ID: {order.id}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">{transformDate(order.date)}</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} alignItems="center" spacing={1}>
                    <Grid item>
                        <Typography variant="body1" color="textSecondary">Projeto:</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">{order.project}</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} justify="space-between" spacing={1}>
                    <Grid item>
                        <Typography variant="body2" color="textSecondary" display="inline">Quantidade: </Typography>
                        <Typography variant="body2" display="inline">{order.qnt}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="textSecondary" display="inline">Preço: </Typography>
                        <Typography variant="body2" display="inline">US${order.price}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" display="inline">Valor total: </Typography>
                        <Typography variant="body2" display="inline">US${order.price*order.qnt}</Typography>
                    </Grid>
                </Grid>
                <Divider variant="middle"/>
                <Grid item xs={12} >
                    <Typography variant="body1">{transformStatus(order.status)}</Typography>
                </Grid>
            </Grid>
        </Paper>
     );
}
 
export default OrderCard;
