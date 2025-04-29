import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [] as string[],
    reducers: {
        addFavorites(state, action: PayloadAction<string>) {
            if (!state.includes(action.payload)) {
                state.push(action.payload)
            }
        },
        removeFavorites(state, action: PayloadAction<string>) {
            return state.filter(item => item !== action.payload)
        }
    }
})

export default favoritesSlice.reducer
export const { addFavorites, removeFavorites } = favoritesSlice.actions 
