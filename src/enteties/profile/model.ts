import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ProfileData} from "./types";
import {getProfileInfo} from "@/enteties/profile/api";


type ProfileState = {
    profile: ProfileData | null;
    isLoading: boolean;
    error: string | null;
};

const initialState: ProfileState = {
    profile: null,
    isLoading: false,
    error: null,
};

export const fetchProfile = createAsyncThunk(
    "profile/fetchProfile",
    async (_, thunkAPI) => {
        try {
            const response = await getProfileInfo();
            if (!response) throw new Error("No data");
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue("Ошибка при загрузке профиля");
        }
    }
);

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.profile = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export default profileSlice.reducer;
