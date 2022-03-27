import { configureStore, ThunkAction, Action, getDefaultMiddleware, applyMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import modernCounterReducer from '../features/counter/counterSlice.ModernRedux';
import { DogApiSlice } from '../features/counter/DogsApiSlice';
import BankSliceReducer from '../features/counter/BankSlice';
import StudentSliceReducer from '../features/counter/StudentSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modernCounter:modernCounterReducer,
    [DogApiSlice.reducerPath]: DogApiSlice.reducer,
    bank:BankSliceReducer,
    student:StudentSliceReducer
  },
  middleware: getDefaultMiddleware =>{
    return getDefaultMiddleware().concat(DogApiSlice.middleware);
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
