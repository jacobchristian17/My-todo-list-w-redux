import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITime } from "./timeSlice";

export const fetchTime = createAsyncThunk<ITime>(
    "time/fetchTime",
    async () => {
        const response = await fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam");
        if (!response.ok) throw new Error("Failed to fetch time");
        const data = await response.json();
        return data;
    }
)