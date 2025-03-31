import React, { useEffect, useState } from 'react';
import { fetchNotes, createNote, updateNote, deleteNote } from '../services/api';

const Home: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    category: '',
    color: '',
    tags: '',
    pinned: false,
  });

  useEffect(() => {
    const getNotes = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found. Please login.');
        return;
      }

      try {
        const data = await fetchNotes(token);
        if (Array.isArray(data)) {
          setNotes(data);
        } else {
          setError('Failed to fetch notes.');
        }
      } catch (err) {
        setError('Error fetching notes.');
      }
    };

    getNotes();
  }, []);

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    const payload = {
      ...newNote,
      tags: newNote.tags.split(',').map(tag => tag.trim()),
      collaborators: [],
    };

    if (isEditing && editingNoteId) {
      const updated = await updateNote(editingNoteId, payload, token!);
      setNotes(prev => prev.map(note => (note._id === editingNoteId ? updated : note)));
    } else {
      const created = await createNote(payload, token!);
      setNotes(prev => [...prev, created]);
    }

    setShowCreateModal(false);
    setIsEditing(false);
    setEditingNoteId(null);
    setNewNote({ title: '', content: '', category: '', color: '', tags: '', pinned: false });
  };

  const handleEdit = (note: any) => {
    setNewNote({
      title: note.title,
      content: note.content,
      category: note.category,
      color: note.color,
      tags: note.tags.join(', '),
      pinned: note.pinned,
    });
    setIsEditing(true);
    setEditingNoteId(note._id);
    setShowCreateModal(true);
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem('token');
    await deleteNote(id, token!);
    setNotes(prev => prev.filter(note => note._id !== id));
  };

  return (
    <>
      <main className="container mx-auto px-6 py-8 text-white">
        <h1 className="text-3xl font-bold mb-6">📓 Your Notes</h1>

        <button
          onClick={() => {
            setIsEditing(false);
            setNewNote({ title: '', content: '', category: '', color: '', tags: '', pinned: false });
            setShowCreateModal(true);
          }}
          className="mb-6 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold text-white"
        >
          + New Note
        </button>

        {error && <p className="text-red-400">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map(note => (
            <div
              key={note._id}
              className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-blue-500/20 hover:border-blue-500 transition relative"
            >
              <div className="absolute top-2 right-2 flex space-x-2">
                <button onClick={() => handleEdit(note)} className="text-blue-400 hover:text-white">
                  <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => handleDelete(note._id)} className="text-red-400 hover:text-white">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
              <h3 className="text-lg font-bold text-blue-300">{note.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{note.content}</p>
              <div className="mt-3 text-xs text-gray-400 flex justify-between">
                <span>{new Date(note.timestamp).toLocaleDateString()}</span>
                <span className={`px-2 py-1 rounded-full ${note.color} bg-opacity-20`}>
                  {note.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md space-y-4 border border-blue-500/20 text-white">
            <h2 className="text-xl font-bold">{isEditing ? 'Edit Note' : 'Create Note'}</h2>

            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 rounded bg-gray-700"
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            />
            <textarea
              placeholder="Content"
              className="w-full p-2 rounded bg-gray-700"
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full p-2 rounded bg-gray-700"
              value={newNote.category}
              onChange={(e) => setNewNote({ ...newNote, category: e.target.value })}
            />
            <input
              type="text"
              placeholder="Color (e.g. bg-blue-400)"
              className="w-full p-2 rounded bg-gray-700"
              value={newNote.color}
              onChange={(e) => setNewNote({ ...newNote, color: e.target.value })}
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              className="w-full p-2 rounded bg-gray-700"
              value={newNote.tags}
              onChange={(e) => setNewNote({ ...newNote, tags: e.target.value })}
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={newNote.pinned}
                onChange={(e) => setNewNote({ ...newNote, pinned: e.target.checked })}
              />
              <span>Pinned</span>
            </label>

            <div className="flex justify-end space-x-4">
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-white">
                Cancel
              </button>
              <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                {isEditing ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
