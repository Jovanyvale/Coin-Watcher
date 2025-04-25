import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'state/fetchData',
    async () => {
        const response = await fetch('https://rest.coincap.io/v3/assets?limit=42&apiKey=34f98b74b718308a1843a3501098cc766dc404c4d49b3e79d995eeb246a539e1')
        const data = await response.json()
        return data.data
    }
)

export interface InitialState {
    content: any[]
    loading: boolean
    error: string | undefined
}

const initialState: InitialState = {
    content: [],
    loading: false,
    error: undefined
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false
                state.content = action.payload
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})
export default dataSlice.reducer