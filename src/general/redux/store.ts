import { configureStore } from '@reduxjs/toolkit';
import { type AppStore } from './types';
import auth from '../../features/auth/presentation/redux/authSlice';

export const store = configureStore<AppStore>({
  reducer: { auth }
});

export type AppDispatch = typeof store.dispatch;
