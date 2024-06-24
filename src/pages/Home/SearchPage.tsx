import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HomeLayout from '../../components/layouts/HomeLayout';
import Hero from '../../components/fragments/Home/Hero';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import { resetApiRes } from '../../redux/slices/carSlice';
import { useFormik } from 'formik';
import { SearchCarRequest } from '../../utils/dto/request/carRequest';
import { carSearchValidationSchema } from '../../utils/validators/carValidation';
import { searchCar } from '../../redux/thunks/carThunks';
import Loading from '../../components/elements/Loading';
import fi_users from '../../assets/images/fi_users.png';
import fi_settings from '../../assets/images/fi_settings.png';
import fi_calendar from '../../assets/images/fi_calendar.png';

const SearchPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, apiRes, paginateData } = useSelector(
    (state: RootState) => state.car
  );

  useEffect(() => {
    if (apiRes.notification) {
      dispatch(resetApiRes());
      const message = apiRes.success
        ? apiRes.message
        : `Error ${apiRes.code}: ${apiRes.message}`;
      const variant = apiRes.success ? 'success' : 'error';
      enqueueSnackbar(message, { variant: variant });
    }
  }, [apiRes, enqueueSnackbar, dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(searchCar({ ...formik.values, pagination: { page, size: 10 } }));
  };

  const formik = useFormik<SearchCarRequest>({
    initialValues: {
      driverType: false,
      pickUpDate: '',
      pickUpTime: '',
      capacity: 0,
      pagination: {
        page: 0,
        size: 10,
      },
    },
    validationSchema: carSearchValidationSchema,
    onSubmit: async (values) => {
      dispatch(searchCar(values));
    },
    enableReinitialize: true,
  });

  return (
    <HomeLayout>
      <Hero />
      <section id="searchBox">
        <div className="bg-white py-5 lg:absolute inset-x-0 lg:top-[425px] lg:mx-28 lg:drop-shadow-lg rounded-xl static inset-auto top-auto mx-auto mt-5">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <form
              id="form"
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-9 gap-5"
            >
              <div className="relative flex flex-col gap-3 col-span-2">
                <label htmlFor="driverType" className="text-dark text-sm">
                  Tipe Driver
                </label>
                <div className="relative mt-2">
                  <select
                    name="driverType"
                    className="input-form w-full border border-gray-300 rounded-md px-3 py-2 pr-10 appearance-none bg-white"
                    onChange={formik.handleChange}
                  >
                    <option value="">Pilih Tipe Driver</option>
                    <option value="1">Dengan Sopir</option>
                    <option value="0">Tanpa Sopir</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center justify-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
                {formik.errors.driverType && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.driverType}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3 col-span-2">
                <label htmlFor="date" className="text-dark text-sm">
                  Tanggal
                </label>
                <input
                  type="date"
                  name="pickUpDate"
                  className="input-form w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                  value={formik.values.pickUpDate}
                  onChange={formik.handleChange}
                />
                {formik.errors.pickUpDate && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.pickUpDate}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3 col-span-2">
                <label htmlFor="time" className="text-dark text-sm">
                  Waktu Jemput/Ambil
                </label>
                <input
                  type="time"
                  name="pickUpTime"
                  className="input-form w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                  value={formik.values.pickUpTime}
                  onChange={formik.handleChange}
                />
                {formik.errors.pickUpTime && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.pickUpTime}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3 col-span-2">
                <label htmlFor="passenger" className="text-dark text-sm">
                  Jumlah Penumpang (optional)
                </label>
                <input
                  type="number"
                  name="capacity"
                  className="input-form w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                  value={formik.values.capacity}
                  onChange={formik.handleChange}
                />
                {formik.errors.capacity && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.capacity}
                  </p>
                )}
              </div>
              <div className="relative flex flex-col gap-3 col-span-1 mt-8">
                <button
                  type="submit"
                  className="btn bg-secondary-color-4 text-white w-full py-3 px-4"
                  id="load"
                  disabled={loading || !formik.dirty}
                >
                  {loading ? <Loading size="sm" /> : 'Search'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section id="searchResult" className="mx-10 lg:mx-32 lg:pt-40 py-5">
        {loading ? (
          <Loading size="lg" />
        ) : paginateData?.data && paginateData.data.length > 0 ? (
          <>
            <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
              {paginateData.data.map((car) => (
                <div key={car.id} className="card bg-base-100 shadow-xl">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-full h-48 object-cover rounded-lg pb-5"
                  />
                  <div className="card-body space-y-2">
                    <p className="text-dark text-sm">{car.model}</p>
                    <p className="text-dark text-md font-bold">
                      Rp. {car.rentPerDay}/hari
                    </p>
                    <p className="text-dark text-sm overflow-auto">
                      ${car.description}
                    </p>
                    <div className="flex gap-3">
                      <img src={fi_users} alt="icon-users" />
                      <p className="text-dark text-sm">
                        {car.capacity} Penumpang
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <img src={fi_settings} alt="icon-settings" />
                      <p className="text-dark text-sm">${car.transmission}</p>
                    </div>
                    <div className="flex gap-3">
                      <img src={fi_calendar} alt="icon-calendar" />
                      <p className="text-dark text-sm">${car.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 join mt-10">
              {paginateData.metadata.page > 0 && (
                <button
                  className="join-item btn btn-primary text-white"
                  onClick={() =>
                    handlePageChange(paginateData.metadata.page - 1)
                  }
                >
                  «
                </button>
              )}
              <button className="join-item btn btn-primary text-white">
                {paginateData.metadata.page + 1}
              </button>
              {paginateData.metadata.page <
                paginateData.metadata.totalPages - 1 && (
                <button
                  className="join-item btn btn-primary text-white"
                  onClick={() =>
                    handlePageChange(paginateData.metadata.page + 1)
                  }
                >
                  »
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="col-span-12 text-center">
            <p className="text-gray-500">No data available</p>
          </div>
        )}
      </section>
    </HomeLayout>
  );
};

export default SearchPage;
