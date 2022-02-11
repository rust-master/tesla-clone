import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/car/carSlice";

export const store = configureStore({
    reducer: {
        car: cardReducer,
    },
});
