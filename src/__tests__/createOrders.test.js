import React from 'react';
import axios from 'axios'
import CreateOrders from '../screens/CreateOrders'
import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

it('should submit form with inputs', async () => {
    // axios.post = jest.fn().mockResolvedValue()
    // axios.get = jest.fn().mockResolvedValue({
    //     data: [
    //         'Projeto 1',
    //         'Projeto 2'
    //         ]
    // })
    
    render(<CreateOrders/>)

    const inputQnt = screen.getByTestId('qntInput').firstChild
    userEvent.type(inputQnt, '100')
    
    const priceInput = screen.getByTestId('priceInput').firstChild
    userEvent.type(priceInput, '5')

    const dateInput = screen.getByTestId('dateInput').firstChild
    userEvent.type(dateInput, '2020-11-04')
    
    //não entendi como acessar o input e selecionar a opção
    
    // const projectInput = (await screen.findByTestId('projectInput')).childNodes[1]
    // userEvent.selectOptions(projectInput, 'Projeto 1')
    // const button = screen.getByText('criar ordem')
    // userEvent.click(button)

    expect(inputQnt).toHaveValue(100)
    expect(priceInput).toHaveValue(5)
    expect(dateInput).toHaveValue('2020-11-04')
    // expect(screen.getAllByTestId('Projeto 1').selected).toBe(true)
    // expect(axios.post).toHaveBeenCalled()
})

it('should not submit empty form', () => {
    axios.get = jest.fn().mockResolvedValue({
        data: [
            'Projeto 1',
            'Projeto 2'
            ]
    })

    render(<CreateOrders/>)

    const form = screen.getByTestId('form')
    
    fireEvent.submit(form)

    expect(screen.getByText('Todos os campos devem ser preenchidos.')).toBeInTheDocument()
})
