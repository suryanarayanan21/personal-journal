import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@/state/store";

export type HabitActionType = "Complete";

export interface HabitAction {
    habitName: string;
    action: HabitActionType;
    timestamp: string;
}

const habitActionsSlice = createSlice({
    name: "habitAction",
    initialState: <HabitAction[]> [],
    reducers: {
        completeHabitAction: (state, action: PayloadAction<HabitAction>) => {
            state.push(action.payload);
        },

        undoHabitAction: (state, action: PayloadAction<HabitAction>) => {
            state = state.filter(s => !(
                s.habitName == action.payload.habitName &&
                s.action == action.payload.action &&
                s.timestamp == action.payload.timestamp
            ));
        }
    }
});

export default habitActionsSlice.reducer;

export const useHabitActions = () => {
    const habitActions = useAppSelector(state => state.habitActions);
    const dispatch = useAppDispatch();

    const { completeHabitAction: cha, undoHabitAction: uha } = habitActionsSlice.actions;

    const completeHabitAction = (habitName: string, action: HabitActionType) => {
        dispatch(cha({
            habitName,
            action,
            timestamp: new Date().toLocaleString('en-US', { dateStyle: 'short' })
        }))
    }

    const undoHabitAction = (habitName: string, action: HabitActionType, timestamp: string) => {
        dispatch(uha({
            habitName,
            action,
            timestamp
        }))
    }

    return { habitActions, completeHabitAction, undoHabitAction }
}