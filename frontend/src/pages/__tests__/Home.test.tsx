import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import * as api from '../../services/api';

jest.mock('../../utils/api');

const mockNote = {
  _id: '1',
  title: 'Test Note',
  content: 'This is a test note.',
  category: 'Testing',
  color: 'bg-blue-400',
  tags: ['test'],
  pinned: false,
  timestamp: new Date().toISOString(),
};

describe('Home', () => {
  beforeEach(() => {
    localStorage.setItem('token', 'mock-token');
  });

  it('renders without crashing', async () => {
    (api.fetchNotes as jest.Mock).mockResolvedValueOnce([mockNote]);

    render(<Home />);

    expect(await screen.findByText('📓 Your Notes')).toBeInTheDocument();
  });

  it('shows error message on failed fetch', async () => {
    (api.fetchNotes as jest.Mock).mockResolvedValueOnce(null);

    render(<Home />);

    expect(await screen.findByText('Failed to fetch notes.')).toBeInTheDocument();
  });

  it('creates a new note and displays it', async () => {
    (api.fetchNotes as jest.Mock).mockResolvedValueOnce([mockNote]);
    (api.createNote as jest.Mock).mockResolvedValueOnce({ ...mockNote, title: 'New Note' });

    render(<Home />);

    // Open modal
    const newNoteBtn = screen.getByText((content) => content.includes('New Note'));
    userEvent.click(newNoteBtn);

    // Fill in form
    userEvent.type(screen.getByPlaceholderText(/title/i), 'New Note');
    userEvent.type(screen.getByPlaceholderText(/content/i), 'Content here');
    userEvent.type(screen.getByPlaceholderText(/category/i), 'General');
    userEvent.type(screen.getByPlaceholderText(/color/i), 'bg-blue-400');
    userEvent.type(screen.getByPlaceholderText(/tags/i), 'testing');

    // Save note
    const saveButton = screen.getByText('Save');
    userEvent.click(saveButton);

    // Expect it to appear
    await waitFor(() => {
      expect(screen.getByText('New Note')).toBeInTheDocument();
    });
  });
});
