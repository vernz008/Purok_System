import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import assignmentService from "../assignment/assignmentService";

const initialState = {
  is_purokSuccess: false,
  is_purokLoading: false,
  is_purokError: false,
  purok_response: "",

  is_organizationSuccess: false,
  is_organizationLoading: false,
  is_organizationError: false,
  organiaztion_response: "",

  is_groupSuccess: false,
  is_groupLoading: false,
  is_groupError: false,
  group_response: "",
};

export const check_purok = createAsyncThunk(
  "assignment/purok",
  async (thunkAPI) => {
    try {
      return await assignmentService.Get_Purok();
    } catch (error) {
      const message = error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const check_origanization = createAsyncThunk(
  "assignment/organization",
  async (thunkAPI) => {
    try {
      return await assignmentService.Get_Organization();
    } catch (error) {
      const message = error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const check_group = createAsyncThunk(
  "assignment/group",
  async (thunkAPI) => {
    try {
      return await assignmentService.Get_Group();
    } catch (error) {
      const message = error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    reset_assignment: (state) => {
      state.is_purokSuccess = false;
      state.is_purokLoading = false;
      state.is_purokError = false;

      state.is_organizationSuccess = false;
      state.is_organizationLoading = false;
      state.is_organizationError = false;

      state.is_groupSuccess = false;
      state.is_groupLoading = false;
      state.is_groupError = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(check_purok.pending, (state, action) => {
        state.is_purokLoading = true;
      })
      .addCase(check_purok.fulfilled, (state, action) => {
        state.is_purokSuccess = true;
        state.is_purokError = false;
        state.is_purokLoading = false;
        state.purok_response = action.payload;
      })
      .addCase(check_purok.rejected, (state, action) => {
        state.is_purokError = true;
        state.is_purokLoading = false;
        state.is_purokSuccess = false;
        state.purok_response = null;
      })

      .addCase(check_origanization.pending, (state, action) => {
        state.is_organizationLoading = true;
      })
      .addCase(check_origanization.fulfilled, (state, action) => {
        state.is_organizationSuccess = true;
        state.is_organizationError = false;
        state.is_organizationLoading = false;
        state.purok_response = action.payload;
      })
      .addCase(check_origanization.rejected, (state, action) => {
        state.is_organizationError = true;
        state.is_organizationLoading = false;
        state.is_organizationSuccess = false;
        state.organiaztion_response = null;
      })

      .addCase(check_group.pending, (state, action) => {
        state.is_groupLoading = true;
      })
      .addCase(check_group.fulfilled, (state, action) => {
        state.is_groupSuccess = true;
        state.is_groupError = false;
        state.is_groupLoading = false;
        state.group_response = action.payload;
      })
      .addCase(check_group.rejected, (state, action) => {
        state.is_groupError = true;
        state.is_groupLoading = false;
        state.is_groupSuccess = false;
        state.organiaztion_response = null;
      });
  },
});

export const { reset_assignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;
