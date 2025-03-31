// src/components/NoteCard.test.tsx
import { render, screen } from '@testing-library/react';
import NoteCard from './NoteCard';

describe('NoteCard Component', () => {
  it('renders note title, content and category', () => {
    render(<NoteCard title="Test Note" content="This is a test" category="Development" />);

    expect(screen.getByText('Test Note')).toBeInTheDocument();
    expect(screen.getByText('This is a test')).toBeInTheDocument();
    expect(screen.getByText('Development')).toBeInTheDocument();
  });
});
