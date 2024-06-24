import { Navigate, Outlet } from 'react-router';
import { DecryptUser } from '../utils/encryptionHelper';
import { UserResponse } from '../utils/dto/response/userResponse';

const keyUser = import.meta.env.VITE_LOCAL_STORAGE_KEY_USER as string;

const PrivateRouteMiddleware: React.FC = () => {
  const user = localStorage.getItem(keyUser);
  if (user) {
    const decodedUser = DecryptUser(user as unknown as string) as UserResponse;
    if (decodedUser) {
      return <Outlet />;
    }
    localStorage.removeItem(keyUser);
    return <Navigate to="/login" />;
  }

  return <Navigate to="/login" />;
};

export default PrivateRouteMiddleware;
