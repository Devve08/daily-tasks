"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Task {
  title: string;
  description: string;
  dueDate: string;
}

interface State {
  tasks: Task[];
  isLoading: boolean;
  errorMessage: string;
  successMessage: string;
}

const initialState: State = {
  tasks: [],
  isLoading: false,
  errorMessage: "",
  successMessage: "",
};

const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default taskReducer.reducer;
