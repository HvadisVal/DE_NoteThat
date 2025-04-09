// src/pages/__tests__/Home.test.tsx

import { render, screen } from '@testing-library/react';
import Home from '../Home';
import userEvent from '@testing-library/user-event';

// ✅ Mock localStorage for token
beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: () => 'mock-token',
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    },
    writable: true,
  });
});

test('opens modal when clicking + New Note', async () => {
  render(<Home />);

  // ✅ Wait for layout to appear
  const newNoteBtn = await screen.findByText(/New Note/i);
  expect(newNoteBtn).toBeInTheDocument();

  await userEvent.click(newNoteBtn);

  // ✅ Optional: assert that modal appeared
  expect(await screen.findByText(/Create New Note/i)).toBeInTheDocument();
});
