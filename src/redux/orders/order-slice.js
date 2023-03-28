import { createSlice } from "@reduxjs/toolkit";
import { getOrders, deleteOrder, patchOrder } from "./order-operations";

const ordersSlice = createSlice({
  name: "orders",

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getOrders.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getOrders.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = "Error";
    },
    [patchOrder.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
      state.error = null;
    },
    [deleteOrder.fulfilled]: (state, action) => {
      state.items = state.items.filter((order) => order.id !== action.payload);
    },
  },
});

export default ordersSlice.reducer;
