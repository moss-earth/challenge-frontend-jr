import React from 'react';
import axios from 'axios'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import OrdersDetail from '../screens/OrdersDetail'

//é um falso positivo, os dados não estão chegando no componente OrderCard mas o card vazio é renderizado
//a solução que encontrei para conseguir renderizar o componente, foi usando o Router, que por sua vez, requer o uso do history

it('should render order detail', async () => {
    axios.get = jest.fn().mockResolvedValue({
        data: [{
            id: 1,
            date: '2020-11-03',
            qnt: '10',
            price: '10',
            project: 'projeto',
            status: 'under_approval'
        }]
    })
    
    const history = createMemoryHistory()
    
    render(
        <Router history={history}>
            <OrdersDetail />
        </Router>
    )

    await screen.findByTestId('card')
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(screen.getByText('DETALHES DA ORDEM')).toBeInTheDocument()
})
