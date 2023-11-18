import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    greeting: 'not fetched yet',
};

export const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    reducers: {
        //reducers here
    },
    extraReducers: (builder) => {
        builder.addCase('getGreeting/fulfilled', (state, action) => {
            state.greeting = action.payload;
        });
    },
});

export default greetingsSlice.reducer;
