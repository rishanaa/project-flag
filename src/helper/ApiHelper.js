import axios from "axios"

// base url for axios

const API_URL_DEV = "https://restcountries.com/v2"


export const axiosApi = axios.create({
  baseURL: API_URL_DEV,
})

