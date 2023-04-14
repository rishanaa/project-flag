import { configureStore } from '@reduxjs/toolkit'
import CountryCardReducer from "./CountryCard/CountryCardSlice"
export const store = configureStore({
  reducer: {
    country: CountryCardReducer,},
})