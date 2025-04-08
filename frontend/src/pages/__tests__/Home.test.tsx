import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';


test('renders the Your Notes heading', () => {
  render(<Home />);
  const heading = screen.getByText(/your notes/i);
  expect(heading).toBeInTheDocument();
});

// Optional: mock the API if Home fetches notes
jest.mock('../../services/api', () => ({
  fetchNotes: jest.fn(() => Promise.resolve([])),
}));

test('opens modal when clicking + New Note', async () => {
  render(<Home />);

  // Click the "+ New Note" button
  const newNoteBtn = screen.getByText(/\+ New Note/i);
  await userEvent.click(newNoteBtn);

  // Check if the modal or input appears
  const titleInput = await screen.findByPlaceholderText(/title/i);
  expect(titleInput).toBeInTheDocument();
});
