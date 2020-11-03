import React from 'react';
import CreateOrders from '../screens/CreateOrders'
import { render, fireEvent, cleanup, getByTestId, getByText } from '@testing-library/react'
import { act } from 'react-dom/test-utils';

afterEach(cleanup)

it("should update state on input change", () => {
    const { getByPlaceholderText } = render(<CreateOrders/>)

    const inputQnt = getByPlaceholderText("10")
    expect(inputQnt.textContent).toBe("")

    act(() => {
        fireEvent.change(inputQnt, {target: { value: "100" }})
    })
        
    expect(inputQnt.textContent).not.toBe("")
})

it("should not submit empty form", () => {
    const { getByTestId, getByText } = render(<CreateOrders/>)

    const form = getByTestId("form")
    act(() => {
        fireEvent.submit(form)
    })
    expect(getByText("Todos os campos devem ser preenchidos.")).toBeInTheDocument()
})