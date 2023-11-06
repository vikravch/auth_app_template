import { createAsyncThunk } from '@reduxjs/toolkit';
import { authRepository } from '../../../../index';
import { type ForgotPasswordData, type LoginData, type SignupData } from './types';

export const login = createAsyncThunk<string, LoginData>(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const response = await authRepository.login(data.username, data.password);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const signup = createAsyncThunk<string, SignupData>(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const response = await authRepository.signup(data.username, data.password);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const forgotPassword = createAsyncThunk<string, ForgotPasswordData>(
  'auth/forgotPassword',
  async (data, thunkAPI) => {
    try {
      const response = await authRepository.forgotPassword(data.username);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
