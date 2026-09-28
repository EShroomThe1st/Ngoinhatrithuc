import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlices';
import authReducer from './slices/authSlices'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
