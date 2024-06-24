import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { AppDispatch, RootState } from '../../redux/store/store';
import { useEffect, useState } from 'react';
import { deleteCar, fetchCar } from '../../redux/thunks/carThunks';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import Loading from '../../components/elements/Loading';
import carImage from '../../assets/images/car.png';
import fiClock from '../../assets/images/fi_clock.png';
import fiKey from '../../assets/images/fi_key.png';
import fiEdit from '../../assets/images/fi_edit.png';
import fiTrash from '../../assets/images/fi_trash.png';
import { Link, useLocation } from 'react-router-dom';
import ConfirmModal from '../../components/fragments/ConfirmModal';

const CarPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, paginateData, apiRes } = useSelector(
    (state: RootState) => state.car
  );

  const location = useLocation();
  const { state } = location;
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    dispatch(fetchCar());
  }, [dispatch]);

  useEffect(() => {
    if (apiRes.notification) {
      const message = apiRes.success
        ? apiRes.message
        : `Error ${apiRes.code}: ${apiRes.message}`;
      const variant = apiRes.success ? 'success' : 'error';
      if (apiRes.success) {
        dispatch(fetchCar());
      }

      enqueueSnackbar(message, { variant: variant });
    }
  }, [apiRes, enqueueSnackbar, dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(fetchCar({ page }));
  };

  const onDeleteClick = (carId: string) => {
    const modal = document.getElementById(
      'confirm_modal_delete'
    ) as HTMLDialogElement;
    modal.showModal();

    const confirmButton = document.querySelector(
      '#confirm_modal_delete .btn-error'
    ) as HTMLButtonElement;
    confirmButton.onclick = () => {
      dispatch(deleteCar(carId));
      modal.close();
    };
  };

  const breadcrumbData = [{ name: 'Home', link: '/' }, { name: 'Car' }];

  return (
    <DashboardLayout breadcrumbs={breadcrumbData}>
      {state && state.message && visible && (
        <div
          role="alert"
          className={`alert alert-${state.type} flex items-center max-w-md mx-auto mb-5`}
        >
          {state.type === 'success' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          <span>{state.message}</span>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-1.5 inline-flex h-8 w-8"
            aria-label="Close"
            onClick={handleClose}
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-5 w-5"
              fill="black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-dark">Car</h2>
        <Link className="btn btn-primary text-white" to={'/car/create'}>
          Add Car
        </Link>
      </div>
      {loading ? (
        <Loading size="lg" />
      ) : (
        <>
          {paginateData?.data && paginateData.data.length > 0 ? (
            <>
              <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
                {paginateData.data.map((car) => (
                  <div key={car.id} className="card bg-base-100 shadow-xl">
                    <img
                      src={car.image || carImage}
                      alt={car.model}
                      className="w-full h-48 object-cover rounded-lg pb-5"
                    />
                    <div className="card-body space-y-2">
                      <h2 className="text-dark text-sm">{car.model}</h2>
                      <p className="text-dark text-md font-bold">
                        Rp. {car.rentPerDay}/hari
                      </p>
                      <div className="flex gap-3">
                        <img src={fiKey} alt="icon-key" />
                        <p className="text-dark text-sm">
                          Start Rent - Finish Rent
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <img src={fiClock} alt="icon-clock" />
                        <p className="text-dark text-sm">
                          Updated {moment(car.updatedAt).format('DD/MM/YYYY')}
                        </p>
                      </div>
                      <div className="card-actions">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <button
                            className="btn outline outline-error text-error bg-transparent hover:bg-error hover:text-white"
                            onClick={() => onDeleteClick(car.id as string)}
                          >
                            <img src={fiTrash} alt="icon-trash" />
                            Delete
                          </button>
                          <Link
                            className="btn btn-success text-white"
                            to={`/car/${car.id}`}
                          >
                            <img src={fiEdit} alt="icon-edit" />
                            Edit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center gap-4 join mb-5">
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
        </>
      )}
      <ConfirmModal
        id="confirm_modal_delete"
        loading={loading}
        title="Delete Car"
        message="Are you sure you want to delete this car?"
      />
    </DashboardLayout>
  );
};

export default CarPage;
