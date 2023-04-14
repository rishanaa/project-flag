import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from '../helper/ApiHelper';

// country card api
export const CountryCardapi = createAsyncThunk(
    "country/CountryCardapi", async () => {
        const response = await axiosApi.get("/all?fields=name,region,flag,");
        return response
    })
      