import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from '../Components/BookingForm';

test('should have correct attributes for date input', () =>
{
    render(<BookingForm/>);
    const dateElement = screen.getByLabelText('Choose date:');
    expect(dateElement).toHaveAttribute('id','res-date');
    expect(dateElement).toHaveAttribute('type', 'date');
});

test('should have correct attributes for time input', () =>
    {
        render(<BookingForm/>);
        const timeElement = screen.getByLabelText('Choose time:');
        expect(timeElement).toHaveAttribute('id','res-time');
    });
