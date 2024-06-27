import React, { useEffect } from 'react';
import { useAuth } from '../../../context/useAuth';
import ConfirmModal from '../ConfirmModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { logoutUser } from '../../../redux/thunks/authThunks';
import { useNavigate } from 'react-router';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { getUser } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, apiRes } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const onDeleteLogout = () => {
    const modal = document.getElementById(
      'confirm_modal_logout'
    ) as HTMLDialogElement;
    modal.showModal();

    const confirmButton = document.querySelector(
      '#confirm_modal_logout .btn-error'
    ) as HTMLButtonElement;
    confirmButton.onclick = () => {
      dispatch(logoutUser());
      modal.close();
    };
  };

  useEffect(() => {
    if (apiRes.notification && apiRes.success) {
      // navigate('/login', {
      //   state: { message: apiRes.message, type: 'success' },
      // });
      location.href = '/login';
    }
  }, [apiRes, dispatch, navigate]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <span className="btn btn-ghost text-xl">BINAR CAR</span>
        </div>
        <div className="flex-none items-center gap-4">
          <div className="md:flex hidden gap-4">
            <input
              type="text"
              className="border border-gray-300 px-3 py-1 focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Search..."
            />
            <button className="border border-indigo-300 px-3 py-1 text-indigo-500">
              Search
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="flex items-center gap-2">
              <div className="bg-indigo-500 text-white w-8 h-8 flex justify-center items-center rounded-full">
                {getUser()?.name.charAt(0).toUpperCase()}
              </div>
              <span className="ml-2">{getUser()?.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="py-2">
                <a className="justify-between">Profile</a>
              </li>
              <li className="py-2">
                <button
                  className="btn btn-outline btn-error btn-sm"
                  onClick={onDeleteLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ConfirmModal
        id="confirm_modal_logout"
        loading={loading}
        title="Logout"
        message="Are you sure you want to logout?"
      />
    </>
  );
};

export default Header;
