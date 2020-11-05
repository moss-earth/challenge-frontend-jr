import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Container, InputAdornment, makeStyles, MenuItem, Snackbar, TextField, Typography } from '@material-ui/core'
import { getOrders, postOrder } from '../requests';
import useForm from '../hooks/useForm';
import Header from '../components/Header';
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
    const [openAlert, setOpenAlert] = useState(false)
    const [form, onChangeInput] = useForm({
        qnt: '',
        price: '',
        orderDate: '',
        project: ''
    })
    
    useEffect(() => {
        getOrders('projects', setProjectList)
    }, [])
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChangeInput(name, value)
    }

    const handleFormSubmit = (event) => {
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
        postOrder('orders', body, history)
    }

    const handleCloseAlert = () => {
        setOpenAlert(false)
    }

    return ( 
        <Container maxWidth='sm'>
            <Header/>
            <Box style={style}>
                <Typography variant='h5' gutterBottom>NOVA ORDEM</Typography>
                <form className={classes.form} onSubmit={handleFormSubmit} data-testid='form'>
                    <TextField
                        name='qnt'
                        label='Quantidade de créditos'
                        variant='filled'
                        color='secondary'
                        type='number'
                        margin='normal'
                        placeholder='10'
                        value={form.qnt}
                        onChange={handleInputChange}
                        InputLabelProps={{  shrink: true }}
                        InputProps={{ 'data-testid': 'qntInput' }}
                    />
                    <TextField
                        name='price'
                        label='Preço (em dólares)'
                        variant='filled'
                        color='secondary'
                        type='number'
                        margin='normal'
                        placeholder='10'
                        value={form.price}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment:
                                <InputAdornment position='start'>$</InputAdornment>                            
                        }}
                        InputProps={{ 'data-testid': 'priceInput'}}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        name='orderDate'
                        label='Data da compra'
                        variant='filled'
                        color='secondary'
                        type='date'
                        margin='normal'
                        value={form.orderDate}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{ 'data-testid': 'dateInput' }}
                    />
                    <TextField
                        name='project'
                        label='Projeto'
                        variant='filled'
                        color='secondary'
                        select={true}
                        margin='normal'
                        value={form.project}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
                        SelectProps={{ 'data-testid': 'projectInput' }}
                    >
                        {projectList.map(project => {
                            return <MenuItem data-testid={project} value={project} key={project} >{project}</MenuItem>
                        })}
                    </TextField>
                    <Button className={classes.submit} variant='contained' color='primary' disableElevation type='submit'>
                        criar ordem
                    </Button>                
                </form>
            </Box>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openAlert}
                autoHideDuration={5000}
                onClose={handleCloseAlert}
                message='Todos os campos devem ser preenchidos.'
            />
        </Container>
     );
}
 
export default CreateOrders;
