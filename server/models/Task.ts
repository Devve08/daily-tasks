import mongoose, { Document, Schema } from "mongoose";

interface Task extends Document {
  title: string;
  description: string;
  dueDate: string;
}

const taskSchema = new Schema<Task>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: String, required: true },
});

const Task = mongoose.model<Task>("Task", taskSchema);

export default Task;
