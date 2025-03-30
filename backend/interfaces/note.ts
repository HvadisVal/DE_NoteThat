import { Document } from 'mongoose';

export interface Note extends Document {
  title: string;
  content: string;
  category: string;
  color: string;
  tags: string[];
  pinned: boolean;
  userId: string; // references the user who created the note
  timestamp: Date;
  collaborators: string[]; // optional list of image URLs or user IDs
}
