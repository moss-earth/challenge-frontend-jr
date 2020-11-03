import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useForm from '../hooks/useForm';
import { Box, Button, Container, InputAdornment, makeStyles, MenuItem, Snackbar, TextField, Typography } from '@material-ui/core'
import Header from '../components/Header';
import { goToOrder, goToOrdersList } from '../router/coordinator';
import { useHistory } from 'react-router-dom';
import { style } from './styles';

const useStyles = makeStyles((theme) => ({
    form:{
        display: 'flex',
        flexDirection: 'column',
    },
    submit: {
        marginTop: theme.spacing(2),
        borderRadius: '34px'
    }
}));

const CreateOrders = () => {
    const classes = useStyles();
    const history = useHistory();

    const [projectList, setProjectList] = useState([])
    const [form, onChangeInput] = useForm({
        qnt: '',
        price: '',
        orderDate: '',
        project: ''
    })
    const [openAlert, setOpenAlert] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3004/projects')
        .then((response) => {
            setProjectList(response.data)
        })
    }, [])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChangeInput(name, value)
    }

    const orderFormSubmit = (event) => {
        event.preventDefault()
        if(!form.qnt || !form.price || !form.orderDate || !form.project) {
            setOpenAlert(true)
        } else {
            createOrder()
        }
    }

    const createOrder = () => {
        const body = {
            id: Date.now(),
            qnt: form.qnt,
            price: form.price,
            date: form.orderDate,
            project: form.project,
            status: 'under_approval'
        }
        axios.post('http://localhost:3004/orders', body)
        .then((response) => 
            goToOrder(history, body.id)
        )
        .catch(err => console.log(err))
    }

    const handleClose = () => {
        setOpenAlert(false)
    }

    return ( 
        <Container maxWidth="sm">
            <Header/>
            <Box style={style}>
                <Typography variant="h5" gutterBottom>nova ordem de compra</Typography>
                <form className={classes.form} onSubmit={orderFormSubmit} data-testid="form">
                    <TextField
                        name="qnt"
                        label="Quantidade de créditos"
                        variant="filled"
                        color="secondary"
                        type="number"
                        margin="normal"
                        placeholder="10"
                        value={form.qnt}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        name="price"
                        label="Preço (em dólares)"
                        variant="filled"
                        color="secondary"
                        type="number"
                        margin="normal"
                        placeholder="7"
                        value={form.price}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment:
                                <InputAdornment position="start">$</InputAdornment>
                        }}
                    />
                    <TextField
                        name="orderDate"
                        label="Data da compra"
                        variant="filled"
                        color="secondary"
                        type="date"
                        margin="normal"
                        value={form.orderDate}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        name="project"
                        label="Projeto"
                        variant="filled"
                        color="secondary"
                        select={true}
                        margin="normal"
                        value={form.project}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true
                        }}
                    >
                        {projectList.map(project => {
                            return <MenuItem value={project} key={project}>{project}</MenuItem>
                        })}
                    </TextField>
                    <Button className={classes.submit} variant="contained" color="primary" disableElevation type="submit">
                        criar ordem
                    </Button>                
                </form>
                <Button fullWidth className={classes.submit} variant="contained" color="secondary" disableElevation onClick={() => goToOrdersList(history)}>
                    ver todas
                </Button>                
            </Box>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openAlert}
                autoHideDuration={5000}
                onClose={handleClose}
                message="Todos os campos devem ser preenchidos."
            />
        </Container>
     );
}
 
export default CreateOrders;
