import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import viewTypeReducer from '@/state/habittracker/viewType';
import habitsReducer from '@/state/habittracker/habits';

const store =  configureStore({
  reducer: {
    viewType: viewTypeReducer,
    habits: habitsReducer
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()