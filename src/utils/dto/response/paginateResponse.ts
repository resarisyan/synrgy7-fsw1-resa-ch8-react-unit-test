export interface PaginatedResponse<T> {
  data: T[];
  totalRecords: number;
  metadata: {
    page: number;
    size: number;
    totalPages: number;
    next: number;
  };
}
