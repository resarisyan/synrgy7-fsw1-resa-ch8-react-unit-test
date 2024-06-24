import { PageRequest } from './pageRequest';

export type CarRequest = {
  id?: string;
  plate: string;
  manufacture: string;
  model: string;
  image?: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  availableAt: string;
  driverType: boolean;
  year: number;
};

export type SearchCarRequest = {
  driverType: boolean;
  capacity?: number;
  pickUpTime: string;
  pickUpDate: string;
  pagination: PageRequest;
};
