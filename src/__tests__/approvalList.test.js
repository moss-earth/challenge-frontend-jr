import React from 'react';
import axios from 'axios';
import ApprovalList from '../screens/ApprovalList'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

it('should render list of pending orders', async () => {
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

    render(<ApprovalList/>)

    const orders = await screen.findAllByTestId('order')

    expect(axios.get).toHaveBeenCalled()
    expect(orders).toHaveLength(2)
})

it('should display empty message when there are no pending orders', () => {
    axios.get = jest.fn().mockResolvedValue({ data: []})

    render(<ApprovalList/>)

    const text = screen.getByTestId('empty-text')

    expect(text).toBeInTheDocument()
})

it('should make request to approve orders and re-render pending orders', async () => {
    axios.put = jest.fn().mockResolvedValue()
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
    render(<ApprovalList/>)

    await screen.findAllByTestId('order')

    const approveButton = screen.getByTestId('approve')
    
    userEvent.click(approveButton)
    
    await waitFor(() => {
        expect(axios.put).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL}/orders/1`, {
            id: 1,
            date: '2020-11-03',
            qnt: '10',
            price: '10',
            project: 'projeto',
            status: 'approved'
        })
    })
    expect(axios.get).toHaveBeenCalledTimes(2)
})

it('should make request to reject orders and re-render pending orders', async () => {
    axios.put = jest.fn().mockResolvedValue()
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
    render(<ApprovalList/>)

    await screen.findAllByTestId('order')

    const rejectButton = screen.getByTestId('reject')
    
    userEvent.click(rejectButton)
    
    await waitFor(() => {
        expect(axios.put).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL}/orders/1`, {
            id: 1,
            date: '2020-11-03',
            qnt: '10',
            price: '10',
            project: 'projeto',
            status: 'rejected'
        })
    })
    expect(axios.get).toHaveBeenCalledTimes(2)
})
