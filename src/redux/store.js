import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./createSlice";

export const store = configureStore({ reducer: dataReducer });
