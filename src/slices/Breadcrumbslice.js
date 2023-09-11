import { createSlice } from '@reduxjs/toolkit'

export const BreadcrumbSlice = createSlice({
  name: 'BreadcrumbSlice',
  initialState: {
    currentname:"",
    previousname:"",
  },
  reducers: {
    pageName: (state,action) => {
        state.previousname=state.currentname;
        state.currentname=action.payload;
  }
},
})

// Action creators are generated for each case reducer function
export const { pageName } = BreadcrumbSlice.actions

export default BreadcrumbSlice.reducer