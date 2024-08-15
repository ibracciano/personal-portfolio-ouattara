import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: null,
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userInfo = action.payload;

        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = portfolioSlice.actions

export const portfolioReducer = portfolioSlice.reducer