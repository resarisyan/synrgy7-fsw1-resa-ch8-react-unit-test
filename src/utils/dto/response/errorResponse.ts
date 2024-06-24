import { AxiosError } from 'axios';

export type ErrorResponse = {
  message: string;
  code: string;
};

export const errorResponse = (error: unknown): ErrorResponse => {
  if (typeof error === 'string') {
    return { message: error, code: '500' };
  } else if (error instanceof AxiosError) {
    if (error.response) {
      return {
        message: error.response.data.message,
        code: error.response.status.toString(),
      };
    } else {
      return { message: error.message, code: '500' };
    }
  } else if (error instanceof Error) {
    return { message: error.message, code: '500' };
  } else {
    return { message: 'An error occurred', code: '500' };
  }
};
