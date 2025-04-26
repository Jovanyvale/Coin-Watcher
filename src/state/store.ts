import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice.ts"
import filtersSlice from "./filtersSlice.ts"

const store = configureStore({
    reducer: {
        data: dataReducer,
        filter: filtersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store