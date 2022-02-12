import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import APIReducer from '../reducers/APIReducer';
export const store = configureStore({
  reducer: {
    api: APIReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
