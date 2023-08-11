import express from 'express';
import { addTask, deleteTask, editTask, getTasks } from '../controllers/taskController';


const router = express.Router();

router.post('/task', addTask);
router.patch('/task', editTask);
router.delete('/task', deleteTask);
router.get('/task', getTasks);

export default router;
