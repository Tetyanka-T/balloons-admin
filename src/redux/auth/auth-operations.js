import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://balloons-shop.onrender.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (admin, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("api/auth/registration", admin);
      return data;
    } catch (error) {
      toast.error("Щось не так, спробуй ще :(");
      return rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (admin, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("api/auth/login", admin);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error("Щось не так, спробуй ще :(");
      return rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get("api/auth/logout");
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const currentAdmin = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("api/auth/current");
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const operations = {
  register,
  logout,
  login,
  currentAdmin,
};
export default operations;
