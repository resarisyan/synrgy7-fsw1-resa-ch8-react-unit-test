import { useFormik } from 'formik';
import { LoginRequest } from '../../utils/dto/request/authRequest';
import { loginValidationSchema } from '../../utils/validators/authValidation';
import AuthLayout from '../../components/layouts/AuthLayout';
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogle, loginUser } from '../../redux/thunks/authThunks';
import { AppDispatch } from '../../redux/store/store';
import { RootState } from '../../redux/store/store';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import { GoogleLogin } from '@react-oauth/google';
import Loading from '../../components/elements/Loading';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, apiRes } = useSelector((state: RootState) => state.auth);

  const formik = useFormik<LoginRequest>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      dispatch(
        loginUser({
          ...values,
        })
      );
    },
  });

  useEffect(() => {
    if (apiRes.notification) {
      if (apiRes.success) {
        location.href = '/';
      } else {
        enqueueSnackbar(`Error ${apiRes.code}: ${apiRes.message}`, {
          variant: 'error',
        });
      }
    }
  }, [apiRes, enqueueSnackbar, navigate]);

  return (
    <AuthLayout title="Login" type="login" description="Login to your account">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.errors.username && (
            <p className="text-red-500 text-xs">{formik.errors.username}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.errors.password && (
            <p className="text-red-500 text-xs">{formik.errors.password}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? <Loading size="sm" /> : 'Login'}
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            dispatch(
              loginGoogle({
                credential: credentialResponse.credential as string,
              })
            );
          }}
          onError={() => {
            enqueueSnackbar('An error occurred', { variant: 'error' });
          }}
        />
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
