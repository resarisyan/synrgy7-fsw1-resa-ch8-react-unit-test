import { UserResponse } from './userResponse';

export type CarResponse = {
  id: string;
  capacity: number;
  model: string;
  year: number;
  plate: string;
  manufacture: string;
  image: string;
  rentPerDay: number;
  description: string;
  transmission: string;
  availableAt: Date;
  driverType: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  createdBy: UserResponse;
  updatedBy?: UserResponse | null;
  deletedBy?: UserResponse | null;
};
