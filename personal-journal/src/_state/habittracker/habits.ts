import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@/state/store";

export interface Habit {
    name: string;
    createdOn: string;
}

type Habits = Habit[];

const initialState: Habits = [];

const habitsTypeSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        createHabit: (state, action: PayloadAction<Habit>) => {
            state.push(action.payload);
        },

        deleteHabit: (state, action: PayloadAction<string>) => {
            state = state.filter(s => s.name != action.payload);
        }
    }
});

export default habitsTypeSlice.reducer;

export const useHabits = () => {
    const habits: Habits = useAppSelector(state => state.habits)
    const dispatch = useAppDispatch();
    const { createHabit: ch, deleteHabit: dh } = habitsTypeSlice.actions;

    const createHabit = (name: string) => {
        const createdOn = new Date().toLocaleString('en-US', { dateStyle: 'short' });
        dispatch(ch({ name, createdOn }));
    }

    const deleteHabit = (name: string) => {
        dispatch(dh(name));
    }

    return { habits, createHabit, deleteHabit };
}