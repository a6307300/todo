import { createSlice } from "@reduxjs/toolkit";
import buttons from "../constants"

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        buttonOn: buttons.all,
        selectedTask:0,
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push({
                id: state.tasks.length,
                name: action.payload,
                active: true,
                selected: false,
            })
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },

        renameTask(state, action) {
            state.tasks.find(task => task.id === action.payload.idTarget).name = action.payload.nameTarget;
        },

        clearCompleted(state, action) {
            state.tasks = state.tasks.filter(task => task.active === action.payload);
        },

        changeStatus(state, action) {
            state.tasks.find(task => task.id === action.payload).active = !state.tasks.find(task => task.id === action.payload).active;
        },

        changeButtonOn(state, action) {
            state.buttonOn = action.payload;
        },
        changeStatusAll(state, action) {
            state.tasks.forEach((task) => task.active=action.payload);
        },
        changeSelection(state, action) {
            state.tasks.find(task => task.id === action.payload).selected = !state.tasks.find(task => task.id === action.payload).selected;
        },
        changeSelectionAll(state, action) {
            state.tasks.forEach((task) => task.selected=false);
        },
    },
})

export const { changeSelection, changeSelectionAll, addTask, deleteTask, changeStatus, changeButtonOn, clearCompleted, renameTask, changeStatusAll } = tasksSlice.actions;
export default tasksSlice.reducer