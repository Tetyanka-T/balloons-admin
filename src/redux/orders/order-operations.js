import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import * as API from "../../apiServise/api";

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (_, { rejectWithValue }) => {
    try {
      const orders = await API.getOrders();

      return orders;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (id, { rejectWithValue }) => {
    try {
      await API.deleteOrder(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const patchOrder = createAsyncThunk(
  "orders/patchOrderStatus",
  async (id, { rejectWithValue }) => {
    try {
      const data = await API.changeOrderStatus(id);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  getOrders,
  deleteOrder,
  patchOrder,
};
export default operations;
