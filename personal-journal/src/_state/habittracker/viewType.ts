import { createSlice } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/state/store';

interface ViewType {
    type: "Overview" | "Today";
}

const initialState: ViewType = {
    type: "Overview"
}

const viewTypeSlice = createSlice({
    name: "viewType",
    initialState,
    reducers: {
        switchToOverview: (state) => {
            state.type = "Overview";
        },

        switchToToday: (state) => {
            state.type = "Today";
        }
    }
})

export default viewTypeSlice.reducer;

export const useViewType = () => {
    const viewType = useAppSelector(state => state.viewType.type);
    const dispatch = useAppDispatch();
    const { switchToOverview: sov, switchToToday: stt } = viewTypeSlice.actions;

    const switchToOverview = () => dispatch(sov());
    const switchToToday = () => dispatch(stt());

    return { viewType, switchToOverview, switchToToday };
}