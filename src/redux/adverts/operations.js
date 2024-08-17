import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66bca1c624da2de7ff6b4ab8.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (paginationParams, thunkApi) => {
    const { page, limit } = paginationParams;

    try {
      if (page === 1) {
        const allAdverts = await axios.get('/adverts');
        const response = await axios.get(
          `/adverts?page=${page}&limit=${limit}`
        );
        return {
          adverts: response.data,
          totalPages: Math.ceil(allAdverts.data.length / limit),
          isFirstPage: true,
        };
      } else {
        const response = await axios.get(
          `/adverts?page=${page}&limit=${limit}`
        );

        return { adverts: response.data, isFirstPage: false };
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
