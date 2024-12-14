import React from 'react';
import {render, screen} from "@testing-library/react";
import BookingForm from './Components/BookingForm';


test('Checks Booking Page Functions', () =>
{
    render(<BookingForm/>)

    const headingElement = screen.getByText("Number of guests")
    expect(headingElement).toBeInTheDocument();

});

