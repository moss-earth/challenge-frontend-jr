import axios from 'axios'
import { goToOrder } from '../router/coordinator'

export const getOrders = (path, setState) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/${path}`)
        .then((response) => {
            setState(response.data)
        })
}

export const getOrderDetail = (id, setState) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/orders/${id}`)
        .then((response) => {
            setState(response.data)
        })
}

export const postOrder = (path, body, history) => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/${path}`, body)
        .then((response) => 
            goToOrder(history, body.id)
        )
        .catch(err => console.log(err))
}
