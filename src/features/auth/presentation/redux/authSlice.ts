import { createSlice } from '@reduxjs/toolkit';
import { forgotPassword, login, signup } from './asyncActions';

const authSlice = createSlice(
  {
    name: 'auth',
    initialState: {
      token: '',
      error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(
        (login.pending, signup.pending, forgotPassword.pending),
        (state) => {
          state.token = '';
          state.error = '';
        }
      )
        .addCase(
          (login.rejected, signup.rejected, forgotPassword.rejected),
          (state, action) => {
            state.error = action.error.message as string;
          }
        )
        .addCase(
          (login.fulfilled),
          (state, action) => {
            state.token = action.payload;
          }
        )
        .addCase(
          (signup.fulfilled),
          (state, action) => {
            state.token = action.payload;
          }
        )
        .addCase(
          (forgotPassword.fulfilled),
          (state, action) => {
            state.token = action.payload;
          }
        );
    }
  }
);

export default authSlice.reducer;
