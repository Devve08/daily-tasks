import { Request, Response } from "express";
import Task from "../models/Task";

interface ITask {
  title: string;
  description: string;
  dueDate: string;
}

export const addTask = async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const newTask = new Task({ title, description, dueDate });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const editTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate } = req.body;

    // Find the task by ID and update its fields
    const result = await Task.findById(id);
    if (result !== null) {
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { title, description, dueDate },
        { new: true }
      );
      res.json({ task: updatedTask });
    } else {
      return res.status(401).json({ error: "Task does not exist" });
    }
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // Find and delete the task by ID
    let result = await Task.findById(id);

    console.log(result);
    if (result !== null) {
      await Task.findByIdAndDelete(id);
      res.json({ message: "Task deleted successfully" });
    } else {
      return res.status(401).json({ error: "Task does not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks: ITask[] = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
