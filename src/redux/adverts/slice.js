import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const ADVERTS_INITIAL_STATE = {
  items: [],
  totalPages: null,
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: ADVERTS_INITIAL_STATE,
  extraReducers: builder => {
    builder.addCase(fetchAdverts.pending, state => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(fetchAdverts.fulfilled, (state, action) => {
        const isFirstPage = action.payload.isFirstPage;
        if (isFirstPage) {
          state.items = action.payload.adverts;
          state.totalPages = action.payload.totalPages -= 1;
        }
        if (!isFirstPage) {
          state.items = state.items.concat(action.payload.adverts);
          state.totalPages -= 1;
        }
        state.isLoading = false;
        state.error = null;
      }),
      builder.addCase(fetchAdverts.rejected, (state, action) => {
        state.items = [];
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
