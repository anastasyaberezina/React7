import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTask = createAsyncThunk("getTask", async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("/tasks.json")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, 1000);
  });
});

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
    loadingStatus: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTask.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.loadingStatus = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.loadingStatus = "failed";
      });
  },
});

export default taskSlice.reducer;