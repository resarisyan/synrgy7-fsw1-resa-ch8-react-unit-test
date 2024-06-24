export type ApiResponse<T> = {
  message: string;
  success: boolean;
  notification?: boolean;
  code?: string;
  data?: T;
};
