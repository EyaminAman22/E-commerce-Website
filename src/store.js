import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterslice'
import Breadcrumbslice from './slices/Breadcrumbslice'
export default configureStore({
  reducer: {
    shawon:counterSlice,
    breadcrumb:Breadcrumbslice,
  },
})