import { createSlice } from "@reduxjs/toolkit";
import { getCatalogCars } from "./operations";


const initialState = {
  cars: [],
};

const catalogCars = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCatalogCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
    
  },
});

export const carsReducer = catalogCars.reducer;
