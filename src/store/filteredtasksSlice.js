import { createSlice } from "@reduxjs/toolkit";
import

const filteredTasksSlice = createSlice ({
    name: "filteredTasks",
    initialState: {
        filteredTasks:[state.tasks]
    },
    reducers: {

},
})

export const {addTask, deleteTask, changeStatus} = tasksSlice.actions;
export default tasksSlice.reducer