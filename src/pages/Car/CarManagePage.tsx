import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { AppDispatch, RootState } from '../../redux/store/store';
import { useEffect } from 'react';
import {
  storeCar,
  updateCar,
  fetchCarById,
} from '../../redux/thunks/carThunks';
import { useSnackbar } from 'notistack';
import Loading from '../../components/elements/Loading';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '../../components/fragments/FormControl';
import { useFormik } from 'formik';
import { CarRequest } from '../../utils/dto/request/carRequest';
import {
  carStoreValidationSchema,
  carUpdateValidationSchema,
} from '../../utils/validators/carValidation';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { resetApiRes } from '../../redux/slices/carSlice';

const CarManagePage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch<AppDispatch>();
  const {
    loading,
    apiRes,
    data: carData,
  } = useSelector((state: RootState) => state.car);

  useEffect(() => {
    if (id) {
      dispatch(fetchCarById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (apiRes.notification) {
      dispatch(resetApiRes());
      if (apiRes.success) {
        navigate('/car', {
          state: { message: apiRes.message, type: 'success' },
        });
      } else {
        if (id) {
          navigate('/car', {
            state: {
              message: `Error ${apiRes.code}: ${apiRes.message}`,
              type: 'error',
            },
          });
        } else {
          enqueueSnackbar(`Error ${apiRes.code}: ${apiRes.message}`, {
            variant: 'error',
          });
        }
      }
    }
  }, [apiRes, enqueueSnackbar, navigate, dispatch, id]);

  const formik = useFormik<CarRequest>({
    initialValues: {
      id: id || '',
      plate: '',
      manufacture: '',
      model: '',
      image: '',
      rentPerDay: 0,
      capacity: 0,
      description: '',
      transmission: '',
      availableAt: '',
      driverType: false,
      year: 0,
    },
    validationSchema: id ? carUpdateValidationSchema : carStoreValidationSchema,
    onSubmit: async (values) => {
      if (id) {
        dispatch(updateCar({ ...values }));
      } else {
        dispatch(storeCar({ ...values }));
      }
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    if (id && carData) {
      formik.setValues({
        id: carData.id,
        plate: carData.plate,
        manufacture: carData.manufacture,
        model: carData.model,
        rentPerDay: carData.rentPerDay,
        capacity: carData.capacity,
        description: carData.description,
        transmission: carData.transmission,
        year: carData.year,
        availableAt: carData.availableAt.toString().split('T')[0],
        driverType: carData.driverType,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carData, id]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        formik.setFieldValue('image', reader.result);
      };
    }
  };

  const breadcrumbData = [
    { name: 'Home', link: '/' },
    { name: 'Car', link: '/car' },
    { name: id ? 'Edit' : 'Create' },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbData}>
      <h2 className="text-2xl font-bold text-dark">
        {id ? 'Edit Car' : 'Create Car'}
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-col my-2">
          <FormControl
            formLayout="horizontal"
            isInvalid={!!formik.errors.plate}
          >
            <FormLabel required className="text-gray-500">
              Plate
            </FormLabel>
            <Input
              name="plate"
              type="text"
              placeholder="Enter your plate"
              onChange={formik.handleChange}
              value={formik.values.plate}
            />
            <FormErrorMessage>{formik.errors.plate}</FormErrorMessage>
          </FormControl>
          <FormControl
            formLayout="horizontal"
            isInvalid={!!formik.errors.manufacture}
          >
            <FormLabel required className="text-gray-500">
              Manufacture
            </FormLabel>
            <Input
              name="manufacture"
              type="text"
              placeholder="Enter your manufacture"
              onChange={formik.handleChange}
              value={formik.values.manufacture}
            />
            <FormErrorMessage>{formik.errors.manufacture}</FormErrorMessage>
          </FormControl>
          <FormControl
            formLayout="horizontal"
            isInvalid={!!formik.errors.model}
          >
            <FormLabel required className="text-gray-500">
              Model
            </FormLabel>
            <Input
              name="model"
              type="text"
              placeholder="Enter your model"
              onChange={formik.handleChange}
              value={formik.values.model}
            />
            <FormErrorMessage>{formik.errors.model}</FormErrorMessage>
          </FormControl>
          <FormControl
            formLayout="horizontal"
            isInvalid={!!formik.errors.image}
          >
            <FormLabel className="text-gray-500" required={!id}>
              Image
            </FormLabel>
            <Input
              name="image"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
            <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
          </FormControl>
          <FormControl
            formLayout="horizontal"
            isInvalid={!!formik.errors.rentPerDay}
          >
            <FormLabel required className="text-gray-500">
              Rent Per Day
            </FormLabel>
            <Input
              name="rentPerDay"
              type="number"
              placeholder="Enter your rent per day"
              onChange={formik.handleChange}
              value={formik.values.rentPerDay}
            />
            <FormErrorMessage>{formik.errors.rentPerDay}</FormErrorMessage>
          </FormControl>
          <FormControl
            formLayout="horizontal"
            isInvalid={!!formik.errors.capacity}
          >
            <FormLabel required className="text-gray-500">
              Capacity
            </FormLabel>
            <Input
              name="capacity"
              type="number"
              placeholder="Enter your capacity"
              onChange={formik.handleChange}
              value={formik.values.capacity}
            />
            <FormErrorMessage>{formik.errors.capacity}</FormErrorMessage>
          </FormControl>
          <FormControl
            formLayout="horizontal"
            isInvalid={!!formik.errors.description}
          >
            <FormLabel required className="text-gray-500">
              Description
            </FormLabel>
            <Textarea
              name="description"
              placeholder="Enter your description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
          </FormControl>
          <FormControl
            formLayout="horizontal"
            isInvalid={!!formik.errors.transmission}
          >
            <FormLabel required className="text-gray-500">
              Transmission
            </FormLabel>
            <Input
              name="transmission"
              type="text"
              placeholder="Enter your transmission"
              onChange={formik.handleChange}
              value={formik.values.transmission}
            />
            <FormErrorMessage>{formik.errors.transmission}</FormErrorMessage>
          </FormControl>
          <FormControl formLayout="horizontal" isInvalid={!!formik.errors.year}>
            <FormLabel required className="text-gray-500">
              Year
            </FormLabel>
            <Input
              name="year"
              type="number"
              placeholder="Enter your year"
              onChange={formik.handleChange}
              value={formik.values.year}
            />
            <FormErrorMessage>{formik.errors.year}</FormErrorMessage>
          </FormControl>
          <FormControl
            formLayout="horizontal"
            isInvalid={!!formik.errors.availableAt}
          >
            <FormLabel required className="text-gray-500">
              Available At
            </FormLabel>
            <Input
              name="availableAt"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.availableAt}
            />
            <FormErrorMessage>
              {formik.errors.availableAt as string}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            formLayout="horizontal"
            isInvalid={!!formik.errors.driverType}
          >
            <FormLabel className="text-gray-500">Driver Type</FormLabel>
            <Input
              name="driverType"
              type="checkbox"
              onChange={formik.handleChange}
              checked={formik.values.driverType}
            />
            <FormErrorMessage>{formik.errors.driverType}</FormErrorMessage>
          </FormControl>
        </div>
        <div className="flex items-center gap-5 mt-10">
          <Link className="btn btn-outline text-dark" to={'/car'}>
            Cancel
          </Link>
          <button
            className="btn btn-primary text-white items-center"
            type="submit"
            disabled={loading}
          >
            {loading ? <Loading size="sm" /> : id ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default CarManagePage;
