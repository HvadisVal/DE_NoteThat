import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';


test('renders the Your Notes heading', () => {
  render(<Home />);
  const heading = screen.getByText(/your notes/i);
  expect(heading).toBeInTheDocument();
});
