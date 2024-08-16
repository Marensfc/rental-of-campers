import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const ADVERTS_INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: ADVERTS_INITIAL_STATE,
  extraReducers: builder => {
    builder.addCase(fetchAdverts.pending, state => {
      state.items = [];
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(fetchAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      }),
      builder.addCase(fetchAdverts.rejected, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
