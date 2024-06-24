import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  loginGoogle,
  loginUser,
  logoutUser,
  registerUser,
} from '../thunks/authThunks';
import { UserResponse } from '../../utils/dto/response/userResponse';
import { setPending, setRejected } from '../../utils/reduxHelpers';
import { ApiResponse } from '../../utils/dto/response/apiResonse';

interface AuthState {
  data: UserResponse | null;
  loading: boolean;
  apiRes: ApiResponse<null>;
}

const initialState: AuthState = {
  data: null,
  loading: false,
  apiRes: {
    message: '',
    code: '',
    success: false,
    notification: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, setPending)
      .addCase(loginUser.rejected, setRejected)
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<ApiResponse<UserResponse>>) => {
          const res = action.payload as ApiResponse<UserResponse>;
          state.data = res.data as UserResponse;
          state.loading = false;
          state.apiRes = {
            message: res.message,
            code: res.code,
            success: res.success,
            notification: true,
          };
        }
      )
      .addCase(loginGoogle.pending, setPending)
      .addCase(loginGoogle.rejected, setRejected)
      .addCase(
        loginGoogle.fulfilled,
        (state, action: PayloadAction<ApiResponse<UserResponse>>) => {
          const res = action.payload as ApiResponse<UserResponse>;
          state.data = res.data as UserResponse;
          state.loading = false;
          state.apiRes = {
            message: res.message,
            code: res.code,
            success: res.success,
            notification: true,
          };
        }
      )
      .addCase(logoutUser.pending, setPending)
      .addCase(logoutUser.rejected, setRejected)
      .addCase(
        logoutUser.fulfilled,
        (state, action: PayloadAction<ApiResponse<UserResponse>>) => {
          const res = action.payload as ApiResponse<UserResponse>;
          state.data = res.data as UserResponse;
          state.loading = false;
          state.apiRes = {
            message: res.message,
            code: res.code,
            success: res.success,
            notification: true,
          };
        }
      )
      .addCase(registerUser.pending, setPending)
      .addCase(registerUser.rejected, setRejected)
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<ApiResponse<UserResponse>>) => {
          const res = action.payload as ApiResponse<UserResponse>;
          state.data = res.data as UserResponse;
          state.loading = false;
          state.apiRes = {
            message: res.message,
            code: res.code,
            success: res.success,
            notification: true,
          };
        }
      );
  },
});

export default authSlice.reducer;
