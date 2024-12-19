import React from 'react';
import { render, screen } from '@testing-library/react';
import ConfirmedBooking from '../Components/ConfirmedBooking';
test('checks for text in the rendered MyComponent', () => {
    render(<ConfirmedBooking />)

    const headingElement = screen.getByText(/Your booking has been/i);
    expect(headingElement).toBeInTheDocument();


});