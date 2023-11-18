import { createAsyncThunk } from '@reduxjs/toolkit';

const API_GREETING_URL = 'http://localhost:3000/greetings';

const getGreeting = createAsyncThunk('getGreeting', async () => {
  const response = await fetch(API_GREETING_URL);
  const data = await response.json();
  return data;
});

export default getGreeting;
