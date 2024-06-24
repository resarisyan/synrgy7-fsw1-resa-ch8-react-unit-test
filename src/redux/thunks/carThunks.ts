import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../lib/axios';
import { errorResponse } from '../../utils/dto/response/errorResponse';
import { PageRequest } from '../../utils/dto/request/pageRequest';
import {
  CarRequest,
  SearchCarRequest,
} from '../../utils/dto/request/carRequest';
import { DecryptUser } from '../../utils/encryptionHelper';

const keyUser = import.meta.env.VITE_LOCAL_STORAGE_KEY_USER as string;
const bearerToken =
  localStorage.getItem(keyUser) &&
  DecryptUser(localStorage.getItem(keyUser) as string).token;
export const fetchCar = createAsyncThunk(
  'car/fetchCar',
  async (pageRequest: PageRequest | undefined, { rejectWithValue }) => {
    try {
      const { data: res } = await axiosInstance.get('/car', {
        params: pageRequest || {},
        headers: {
          Authorization: bearerToken ? `Bearer ${bearerToken}` : '',
        },
      });
      return res;
    } catch (error) {
      const res = errorResponse(error);
      res.code == '401' && localStorage.removeItem(keyUser);
      return rejectWithValue(res);
    }
  }
);

export const storeCar = createAsyncThunk(
  'car/storeCar',
  async (carRequest: CarRequest, { rejectWithValue }) => {
    try {
      const { data: res } = await axiosInstance.post('/car', carRequest, {
        headers: {
          Authorization: bearerToken ? `Bearer ${bearerToken}` : '',
        },
      });
      return res;
    } catch (error) {
      const res = errorResponse(error);
      res.code == '401' && localStorage.removeItem(keyUser);
      return rejectWithValue(res);
    }
  }
);

export const updateCar = createAsyncThunk(
  'car/updateCar',
  async (carRequest: CarRequest, { rejectWithValue }) => {
    try {
      const { data: res } = await axiosInstance.put(
        `/car/${carRequest.id}`,
        carRequest,
        {
          headers: {
            Authorization: bearerToken ? `Bearer ${bearerToken}` : '',
          },
        }
      );
      return res;
    } catch (error) {
      const res = errorResponse(error);
      res.code == '401' && localStorage.removeItem(keyUser);
      return rejectWithValue(res);
    }
  }
);

export const deleteCar = createAsyncThunk(
  'car/deleteCar',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data: res } = await axiosInstance.delete(`/car/${id}`, {
        headers: {
          Authorization: bearerToken ? `Bearer ${bearerToken}` : '',
        },
      });
      return res;
    } catch (error) {
      const res = errorResponse(error);
      res.code == '401' && localStorage.removeItem(keyUser);
      return rejectWithValue(res);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'car/fetchCarById',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data: res } = await axiosInstance.get(`/car/${id}`, {
        headers: {
          Authorization: bearerToken ? `Bearer ${bearerToken}` : '',
        },
      });
      return res;
    } catch (error) {
      const res = errorResponse(error);
      res.code == '401' && localStorage.removeItem(keyUser);
      return rejectWithValue(res);
    }
  }
);

export const searchCar = createAsyncThunk(
  'car/searchCar',
  async (searchCarRequest: SearchCarRequest, { rejectWithValue }) => {
    try {
      const { data: res } = await axiosInstance.post(
        '/car/search',
        searchCarRequest,
        {
          headers: {
            Authorization: bearerToken ? `Bearer ${bearerToken}` : '',
          },
        }
      );
      return res;
    } catch (error) {
      const res = errorResponse(error);
      res.code == '401' && localStorage.removeItem(keyUser);
      return rejectWithValue(res);
    }
  }
);
