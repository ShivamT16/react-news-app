import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopNews = createAsyncThunk(
    'news/fetchTopNews',
    async () => {
        const response = await axios.get("https://1bdb1be7-8673-4047-9006-ba4e6ff347d9-00-v5zrisg770gu.spock.replit.dev/news",)
        return response.data;
    }
)

const initialState = {
    news: [],
    favourites: [],
    status: "idle",
    error: null,
    filterByCategory: "All",
    headline: "Today's",
    searchFilter: ""
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setFilterCategory: (state, action) => {
            state.filterByCategory = action.payload
        },
        setSearchFilter: (state, action) => {
            state.searchFilter = action.payload
        },
        setFavourites: (state, action) => {
            state.favourites= [...state.favourites, action.payload]
        },
        removeFavourite: (state, action) => {
            state.favourites = state.favourites.filter((news) => news.source.id !== action.payload) 
        }
    },
    extraReducers: {
        [fetchTopNews.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchTopNews.fulfilled]: (state, action) => {
            state.status = 'success'
            state.news = action.payload
        },
        [fetchTopNews.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        },
    }
})

export const {setFilterCategory, setSearchFilter, setFavourites,removeFavourite } = newsSlice.actions;