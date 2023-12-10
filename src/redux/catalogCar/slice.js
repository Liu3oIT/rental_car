import { createSlice } from "@reduxjs/toolkit";
import { getCarId, getCatalogCars } from "./operations";

const initialState = {
  cars: [],
  car: null,
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
      .addCase(getCarId.fulfilled, (state, action) => {
        state.car = action.payload;
      });
  },
});

export const carsReducer = catalogCars.reducer;
