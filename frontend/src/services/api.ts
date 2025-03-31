const API_BASE = 'http://localhost:5001/api';

export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  return await res.json();
};

const API_URL = 'http://localhost:5001/api/notes';

export const fetchNotes = async (token: string) => {
  const res = await fetch(API_URL, {
    headers: { 'auth-token': token }
  });
  return res.json();
};

export const createNote = async (note: any, token: string) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': token
    },
    body: JSON.stringify(note)
  });
  return res.json();
};

export const updateNote = async (id: string, note: any, token: string) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': token
    },
    body: JSON.stringify(note)
  });
  return res.json();
};

export const deleteNote = async (id: string, token: string) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'auth-token': token }
  });
  return res.json();
};
