import { ApiResponse } from './../../utils/dto/response/apiResonse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaginatedResponse } from '../../utils/dto/response/paginateResponse';
import { CarResponse } from '../../utils/dto/response/carResponse';
import {
  deleteCar,
  fetchCar,
  fetchCarById,
  searchCar,
  storeCar,
  updateCar,
} from '../thunks/carThunks';
import { setPending, setRejected } from '../../utils/reduxHelpers';

interface CarState {
  paginateData: PaginatedResponse<CarResponse> | null;
  activePage: number;
  data: CarResponse | null;
  apiRes: ApiResponse<null>;
  loading: boolean;
}

const initialState: CarState = {
  activePage: 0,
  paginateData: null,
  data: null,
  loading: false,
  apiRes: {
    message: '',
    code: '',
    success: false,
    notification: false,
  },
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    resetApiRes: (state) => {
      state.apiRes = initialState.apiRes;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCar.pending, setPending)
      .addCase(fetchCar.rejected, setRejected)
      .addCase(
        fetchCar.fulfilled,
        (
          state,
          action: PayloadAction<ApiResponse<PaginatedResponse<CarResponse>>>
        ) => {
          const res = action.payload as ApiResponse<
            PaginatedResponse<CarResponse>
          >;
          state.paginateData = res.data as PaginatedResponse<CarResponse>;
          state.loading = false;
          state.apiRes = {
            message: res.message,
            code: res.code,
            success: res.success,
          };

          carSlice.caseReducers.resetApiRes(state);
        }
      )
      .addCase(storeCar.pending, setPending)
      .addCase(storeCar.rejected, setRejected)
      .addCase(
        storeCar.fulfilled,
        (state, action: PayloadAction<ApiResponse<CarResponse>>) => {
          const res = action.payload as ApiResponse<CarResponse>;
          state.data = res.data as CarResponse;
          state.loading = false;
          state.apiRes = {
            message: res.message,
            code: res.code,
            success: res.success,
            notification: true,
          };
        }
      )
      .addCase(updateCar.pending, setPending)
      .addCase(updateCar.rejected, setRejected)
      .addCase(
        updateCar.fulfilled,
        (state, action: PayloadAction<ApiResponse<CarResponse>>) => {
          const res = action.payload as ApiResponse<CarResponse>;
          state.loading = false;
          state.apiRes = {
            message: res.message,
            code: res.code,
            success: res.success,
            notification: true,
          };
        }
      )
      .addCase(deleteCar.pending, setPending)
      .addCase(deleteCar.rejected, setRejected)
      .addCase(
        deleteCar.fulfilled,
        (state, action: PayloadAction<ApiResponse<CarResponse>>) => {
          const res = action.payload as ApiResponse<CarResponse>;
          state.loading = false;
          state.apiRes = {
            message: res.message,
            code: res.code,
            success: res.success,
            notification: true,
          };
        }
      )
      .addCase(fetchCarById.pending, setPending)
      .addCase(fetchCarById.rejected, setRejected)
      .addCase(
        fetchCarById.fulfilled,
        (state, action: PayloadAction<ApiResponse<CarResponse>>) => {
          const res = action.payload as ApiResponse<CarResponse>;
          state.data = res.data as CarResponse;
          state.loading = false;
          state.apiRes = {
            message: res.message,
            code: res.code,
            success: res.success,
          };
        }
      )
      .addCase(searchCar.pending, setPending)
      .addCase(searchCar.rejected, setRejected)
      .addCase(
        searchCar.fulfilled,
        (
          state,
          action: PayloadAction<ApiResponse<PaginatedResponse<CarResponse>>>
        ) => {
          const res = action.payload as ApiResponse<
            PaginatedResponse<CarResponse>
          >;
          state.paginateData = res.data as PaginatedResponse<CarResponse>;
          state.loading = false;
          state.apiRes = {
            message: res.message,
            code: res.code,
            success: res.success,
          };

          carSlice.caseReducers.resetApiRes(state);
        }
      );
  },
});

export const { resetApiRes } = carSlice.actions;
export default carSlice.reducer;
