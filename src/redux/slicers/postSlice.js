import { createSlice } from "@reduxjs/toolkit";
import { getPosts, deletePost, savePost, getPost, updatePost } from "../api";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    datas: [],
    data: null,
    loading: false,
    error: false,
    message: null
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
        state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
        state.datas = action.payload;
        state.loading = false;
    },
    [getPosts.rejected]: (state) => {
        state.pending = false;
        state.message = "Something Went Wrong";
        state.error = true;
    },
    [getPost.pending]: (state) => {
        state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
    },
    [getPost.rejected]: (state) => {
        state.pending = false;
        state.message = "Something Went Wrong";
        state.error = true;
    },
    [savePost.pending]: (state) => {
        state.loading = true;
    },
    [savePost.fulfilled]: (state, _) => {
        state.loading = false;
        state.message = "Save post success"
    },
    [savePost.rejected]: (state) => {
        state.pending = false;
        state.message = "Something Went Wrong";
        state.error = true;
    },
    [updatePost.pending]: (state) => {
        state.loading = true;
    },
    [updatePost.fulfilled]: (state, _) => {
        state.loading = false;
        state.message = "Update post success"
    },
    [updatePost.rejected]: (state) => {
        state.pending = false;
        state.message = "Something Went Wrong";
        state.error = true;
    },
    [deletePost.pending]: (state) => {
        state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
        state.datas = state.datas.filter( v => v.id != action.payload.id);
        state.loading = false;
        state.message = "Delete post success"
    },
    [deletePost.rejected]: (state) => {
        state.pending = false;
        state.error = "Something Went Wrong";
    },
  }
});

export default postSlice.reducer;