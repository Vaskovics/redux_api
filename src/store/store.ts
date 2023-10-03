import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from '../features/posts';



export const store = configureStore({
  reducer: {
    stateObj: postSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;