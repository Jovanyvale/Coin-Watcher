import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice.ts"
import filtersSlice from "./filtersSlice.ts"
import favoritesSlice from "./favoritesSlice.ts"

const store = configureStore({
    reducer: {
        data: dataReducer,
        filter: filtersSlice,
        favorites: favoritesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store