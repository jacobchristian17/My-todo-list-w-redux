import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTime } from "./timeThunk";
export interface ITime {
    hour: number;
    minute: number;
    seconds: number;
    milliseconds: number;
    ampm: "AM" | "PM";
    dateTime?: Date;
}
interface ITimeState {
    time: ITime;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ITimeState = {
    time: {
        hour: 0,
        minute: 0,
        seconds: 0,
        milliseconds: 0,
        ampm: "AM",
    },
    status: "idle",
    error: null
}

const timeSlice = createSlice({
    name: "time",
    initialState,
    reducers: {
        updateTime: (state, action: PayloadAction<ITimeState>) => {
            console.log("Update State")
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTime.pending, (state)=> {
            state.status = "loading";
            state.error = null;
        })
        .addCase(fetchTime.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.time = action.payload;
        })
        .addCase(fetchTime.rejected, (state, action)=> {
            state.status = "failed";
            state.error = action.error.message || "Failed to fetch time";
        })
    }
})

export const { updateTime } = timeSlice.actions;
export default timeSlice.reducer