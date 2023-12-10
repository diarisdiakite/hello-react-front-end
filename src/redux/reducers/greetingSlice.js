import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMessage = createAsyncThunk('random_greeting', async () => {
  const { data } = await axios.get('/random_greeting');
  return data.greeting;
});

const initialState = {
  message: '',
};
export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export const greetingReducer = greetingSlice.reducer;
