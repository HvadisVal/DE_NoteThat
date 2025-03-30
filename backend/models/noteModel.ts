import { Schema, model } from 'mongoose';
import { Note } from '../interfaces/note';

const noteSchema = new Schema<Note>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  color: { type: String, required: true },
  tags: [{ type: String }],
  pinned: { type: Boolean, default: false },
  userId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  collaborators: [{ type: String }]
});

export const NoteModel = model<Note>('Note', noteSchema);
