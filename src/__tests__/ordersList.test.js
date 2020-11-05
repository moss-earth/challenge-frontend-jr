import React from 'react';
import OrdersList from '../screens/OrdersList'
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react'

it('should render list of orders', async () => {
    axios.get = jest.fn().mockResolvedValue({
        data: [{
            id: '1',
            date: '2020-11-03',
            qnt: '10',
            price: '10',
            project: 'projeto',
            status: 'under_approval'
        },
        {
            id: '2',
            date: '2020-11-03',
            qnt: '5',
            price: '5',
            project: 'projeto',
            status: 'under_approval'
        }]
    })

    render(<OrdersList/>)

    const orders = await screen.findAllByTestId('order')
    
    await waitFor(() => {
        expect(axios.get).toHaveBeenCalled()
    })
    expect(orders).toHaveLength(2)
})
