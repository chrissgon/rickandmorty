import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./hooks";
import character from "./character";
import episode from "./episode";

export const store = configureStore({
  reducer: {
    character,
    episode,
  },
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export * from "./character";
export * from "./episode";
