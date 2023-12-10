import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6570c49409586eff6641ea8a.mockapi.io/api/car/";

export const getCatalogCars = createAsyncThunk(
  "api/catalog",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/rental");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getCarId = createAsyncThunk(
  "api/getCarId",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/rental/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
