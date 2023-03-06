import { render, screen } from '@testing-library/react';

import BookingForm from './BookingForm';

test('Choose date and time', () => {
  render(<BookingForm />);
});
