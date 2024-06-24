import * as Yup from 'yup';

export const carStoreValidationSchema = Yup.object().shape({
  plate: Yup.string().required('Plate is required'),
  manufacture: Yup.string().required('Manufacture is required'),
  model: Yup.string().required('Model is required'),
  image: Yup.string().required('Image is required'),
  rentPerDay: Yup.number().required('Rent Per Day is required'),
  capacity: Yup.number().required('Capacity is required'),
  description: Yup.string().required('Description is required'),
  transmission: Yup.string().required('Transmission is required'),
  year: Yup.number().required('Year is required'),
  availableAt: Yup.date().required('Available At is required'),
});

export const carUpdateValidationSchema = Yup.object().shape({
  id: Yup.string().required('Id is required'),
  plate: Yup.string().required('Plate is required'),
  manufacture: Yup.string().required('Manufacture is required'),
  model: Yup.string().required('Model is required'),
  image: Yup.string().optional().nullable(),
  rentPerDay: Yup.number().required('Rent Per Day is required'),
  capacity: Yup.number().required('Capacity is required'),
  description: Yup.string().required('Description is required'),
  transmission: Yup.string().required('Transmission is required'),
  year: Yup.number().required('Year is required'),
  availableAt: Yup.date().required('Available At is required'),
});

export const carSearchValidationSchema = Yup.object().shape({
  driverType: Yup.boolean().required('Driver Type is required'),
  capacity: Yup.number().min(0, 'Capacity must be at least 1'),
  pickUpTime: Yup.string().required('Pick Up Time is required'),
  pickUpDate: Yup.date().required('Pick Up Date is required'),
});
