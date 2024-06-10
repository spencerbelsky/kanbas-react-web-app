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
      console.log("update assignments:")
      console.log("state assignments", state.assignments)
      console.log("action", action.payload)
      
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          console.log(state.assignments)
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      console.log("set assignment:")
      console.log("state assignments", state.assignment)
      console.log("action", action.payload)
      state.assignment = action.payload;
      console.log("state assignment", state.assignment)
    },
    setAssignments: (state, action) => {
      console.log("set assignments (all assignments):")
      console.log("state assignments", state.assignment)
      console.log("action", action.payload)
      state.assignments = action.payload;
      console.log("state assignment after the set", state.assignment)
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;