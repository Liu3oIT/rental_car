import { configureStore } from "@reduxjs/toolkit";
// import {
  // persistStore,
  // persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
// } from "redux-persist";
import { carsReducer } from "./catalogCar/slice";
// import storage from "redux-persist/lib/storage";



// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];



export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
  // middleware,
});

// export const persistor = persistStore(store);
