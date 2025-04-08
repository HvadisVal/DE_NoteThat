import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../Home';
import userEvent from '@testing-library/user-event';

// Mock fetch globally
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            _id: '1',
            title: 'Mock Note',
            content: 'This is a mocked note',
            category: 'Test',
            color: 'bg-blue-400',
            timestamp: new Date().toISOString(),
            tags: ['mock', 'test'],
          },
        ]),
    })
  ) as jest.Mock;
  localStorage.setItem('token', 'fake-jwt-token'); // mock token
});

afterEach(() => {
  jest.resetAllMocks();
  localStorage.clear();
});

describe('Home Page', () => {
  test('renders fetched notes', async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText(/Mock Note/i)).toBeInTheDocument();
    });
  });

  test('shows error if no token', async () => {
    localStorage.removeItem('token');

    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText(/no token found/i)).toBeInTheDocument();
    });
  });
});

test('creates a new note and displays it', async () => {
  const mockNote = {
    _id: '2',
    title: 'Created Note',
    content: 'Content for the created note',
    category: 'Personal',
    color: 'bg-pink-400',
    timestamp: new Date().toISOString(),
    tags: ['created', 'test'],
    pinned: false,
  };

  // First fetch returns no notes
  (fetch as jest.Mock)
    .mockResolvedValueOnce({
      json: () => Promise.resolve([]),
    })
    // Then after createNote call
    .mockResolvedValueOnce({
      json: () => Promise.resolve(mockNote),
    });

  render(<Home />);

  // Open modal
  const newNoteBtn = screen.getByRole('button', { name: /new note/i });
  userEvent.click(newNoteBtn);

  // Fill in form
  userEvent.type(screen.getByPlaceholderText('Title'), mockNote.title);
  userEvent.type(screen.getByPlaceholderText('Content'), mockNote.content);
  userEvent.type(screen.getByPlaceholderText('Category'), mockNote.category);
  userEvent.type(screen.getByPlaceholderText('Color (e.g. bg-blue-400)'), mockNote.color);
  userEvent.type(screen.getByPlaceholderText('Tags (comma separated)'), mockNote.tags.join(', '));

  // Submit
  const saveBtn = screen.getByText('Save');
  userEvent.click(saveBtn);

  // Wait for note to appear
  await waitFor(() => {
    expect(screen.getByText(mockNote.title)).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText(mockNote.content)).toBeInTheDocument();
  });
});
