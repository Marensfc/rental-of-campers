import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/slice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
