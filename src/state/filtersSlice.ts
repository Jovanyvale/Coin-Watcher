import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    searchInput: string
    sortInput: string
}

const initialState: InitialState = {
    searchInput: '',
    sortInput: ''
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchInput(state, action) {
            state.searchInput = action.payload
        },
        setSortInput(state, action) {
            state.sortInput = action.payload
        }
    },
}
)
export default filtersSlice.reducer
export const { setSearchInput, setSortInput } = filtersSlice.actions