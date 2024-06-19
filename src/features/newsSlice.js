import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news: [],
    status: "idle",
    error: null
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: {}
})