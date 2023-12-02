import { createAsyncThunk } from "@reduxjs/toolkit";
import { paymentService } from "../services/payment.service";
export const paymentCart = createAsyncThunk(
  "payment/paymentCart",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await paymentService.checkout(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
