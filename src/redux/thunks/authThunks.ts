import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  GoogleLoginRequest,
  LoginRequest,
  RegisterRequest,
} from '../../utils/dto/request/authRequest';
import { axiosInstance } from '../../lib/axios';
import { errorResponse } from '../../utils/dto/response/errorResponse';
import { DecryptUser, EncryptUser } from '../../utils/encryptionHelper';

const keyUser = import.meta.env.VITE_LOCAL_STORAGE_KEY_USER as string;
const bearerToken =
  localStorage.getItem(keyUser) &&
  DecryptUser(localStorage.getItem(keyUser) as string).token;

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginRequest: LoginRequest, { rejectWithValue }) => {
    try {
      const { data: res } = await axiosInstance.post(
        '/auth/login',
        loginRequest
      );
      localStorage.setItem(keyUser, EncryptUser(res.data));
      return res;
    } catch (error) {
      return rejectWithValue(errorResponse(error));
    }
  }
);

export const loginGoogle = createAsyncThunk(
  'auth/loginGoogle',
  async (googleLoginRequest: GoogleLoginRequest, { rejectWithValue }) => {
    try {
      const { data: res } = await axiosInstance.post(
        '/auth/google-login',
        googleLoginRequest
      );
      localStorage.setItem(keyUser, EncryptUser(res.data));
      return res;
    } catch (error) {
      return rejectWithValue(errorResponse(error));
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data: res } = await axiosInstance.delete('/auth/logout', {
        headers: {
          Authorization: bearerToken ? `Bearer ${bearerToken}` : '',
        },
      });
      localStorage.removeItem(keyUser);
      return res;
    } catch (error) {
      return rejectWithValue(errorResponse(error));
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (registerRequest: RegisterRequest, { rejectWithValue }) => {
    try {
      const { data: res } = await axiosInstance.post(
        '/auth/register',
        registerRequest
      );
      return res;
    } catch (error) {
      return rejectWithValue(errorResponse(error));
    }
  }
);
