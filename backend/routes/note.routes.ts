import express from 'express';
import { getNotes, createNote, updateNote, deleteNote } from '../controllers/noteController';
import { securityToken } from '../controllers/authController';

const router = express.Router();

router.use(securityToken); // all routes below require auth

router.get('/', getNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
