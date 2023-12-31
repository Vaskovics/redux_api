import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Person } from '../types/Person';

type PostState = {
  posts: Person [],
  loading: boolean,
  error: boolean,
};

const initialState: PostState = {
  posts: [],
  loading: false,
  error: false, 
};

export const postSlice = createSlice({
  name: 'stateObj',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<Person[]>) => {
      state.posts = action.payload;
    },

    setLoading: (state, actions: PayloadAction<boolean>) => {
      state.loading = actions.payload;
    },

    setError: (state, actions: PayloadAction<boolean>) => {
      state.error = actions.payload;
    },
  },
});

export const { actions } = postSlice;
export default postSlice.reducer;