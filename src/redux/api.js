import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const savePost = createAsyncThunk("post/savePost", async (data) => {
    const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts`, data
    );
    return response.data;
});

export const updatePost = createAsyncThunk("post/updatePost", async (data) => {
    const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/posts/${data.id}`,
        {
            title : data.title,
            content : data.content
        }
    );
    return response.data;
});

export const getPost = createAsyncThunk("post/getPost", async (id) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts/${id}`
    );
    return response.data;
});

export const getPosts = createAsyncThunk("post/getPosts", async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/posts`
    );
    return response.data;
});

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/posts/${id}`
    );
    return response.data;
});