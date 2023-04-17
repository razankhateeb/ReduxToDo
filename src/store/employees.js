import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const employeesSlice = createSlice({
  name: "Employees",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload.name,
      });
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
