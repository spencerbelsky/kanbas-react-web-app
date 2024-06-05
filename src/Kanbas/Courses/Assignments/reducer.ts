import {createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const assignments = db.default.assignments[0];

const initialState = {
  assignments: assignments,
  assignment: { 
                _id: "",
                title: "New Assignment", 
                description: "New Assignment Description", 
                course: "CS4550.12631.202410", 
                points :"100", 
                due_date: "2025-05-06",
                available_from: "2024-05-06",
            }
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;