import React from 'react';
import { initializeTimes } from './pages/BookingPage';
import { updateTimes } from './pages/BookingPage';

const getIT = initializeTimes();
const getUT = updateTimes();


test('checks initializeTimes function', () =>
{
  expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

});

test('checks updateTimes function', () =>
{
  expect(updateTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);




});

