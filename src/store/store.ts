import { configureStore } from "@reduxjs/toolkit";
import vacancyReducer from "@/slices/vacansySlice";

export const store = configureStore({
  reducer: {
    vacancies: vacancyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
