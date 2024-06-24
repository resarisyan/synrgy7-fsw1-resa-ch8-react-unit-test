import { PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from './dto/response/apiResonse';
import { ErrorResponse } from './dto/response/errorResponse';

type StateWithLoadingAndError = {
  loading: boolean;
  apiRes: ApiResponse<null> | null;
};

export const setPending = <T extends StateWithLoadingAndError>(state: T) => {
  state.loading = true;
  state.apiRes = {
    message: '',
    code: '',
    success: false,
    notification: false,
  };
};

export const setRejected = <T extends StateWithLoadingAndError>(
  state: T,
  action: PayloadAction<string | unknown>
) => {
  state.loading = false;
  const errorRes = action.payload as ErrorResponse;
  state.apiRes = {
    message: errorRes.message,
    code: errorRes.code,
    success: false,
    notification: true,
  };
};
