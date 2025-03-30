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

export const fetchNotes = async (token: string) => {
  const res = await fetch(`${API_BASE}/notes`, {
    headers: {
      'auth-token': token
    }
  });

  return await res.json();
};

export const createNote = async (note: any, token: string) => {
  const res = await fetch(`${API_BASE}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': token
    },
    body: JSON.stringify(note)
  });

  return await res.json();
};
