import { useFormik } from 'formik';
import { RegisterRequest } from '../../utils/dto/request/authRequest';
import { loginValidationSchema } from '../../utils/validators/authValidation';
import AuthLayout from '../../components/layouts/AuthLayout';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/thunks/authThunks';
import { AppDispatch } from '../../redux/store/store';
import { RootState } from '../../redux/store/store';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import Loading from '../../components/elements/Loading';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, apiRes } = useSelector((state: RootState) => state.auth);

  const formik = useFormik<RegisterRequest>({
    initialValues: {
      username: '',
      email: '',
      name: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      dispatch(registerUser(values));
    },
  });

  useEffect(() => {
    if (apiRes.notification) {
      if (apiRes.success) {
        navigate('/login');
      } else {
        enqueueSnackbar(`Error ${apiRes.code}: ${apiRes.message}`, {
          variant: 'error',
        });
      }
    }
  }, [apiRes, enqueueSnackbar, navigate]);

  return (
    <AuthLayout
      title="Register"
      type="register"
      description="Register to your account"
    >
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.errors.name && (
            <p className="text-red-500 text-xs">{formik.errors.name}</p>
          )}
        </div>
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
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.errors.email && (
            <p className="text-red-500 text-xs">{formik.errors.email}</p>
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
            {loading ? <Loading size="sm" /> : 'Register'}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
