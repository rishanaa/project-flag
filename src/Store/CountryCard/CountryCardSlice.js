import { createSlice } from '@reduxjs/toolkit'
import { CountryCardapi } from '../api';
const INITIAL_STATE = {
  carts: [],
  loading: false,
}

export const CountryCardSlice = createSlice({
  name: 'country',
  initialState: INITIAL_STATE,
  reducers: {
    
  },
  extraReducers: {
         
    //add CountryCardapi to cart
    [CountryCardapi.pending]: (state, action) => {
        state.loading = true;
    },
    [CountryCardapi.fulfilled]: (state, action) => {
        state.loading = false;
        console.log(action.payload.data);
        state.carts= action?.payload?.data
    },
    [CountryCardapi.rejected]: (state, action) => {
        state.loading = false;
    },}
})

// Action creators are generated for each case reducer function
export const {} = CountryCardSlice.actions

export default CountryCardSlice.reducer