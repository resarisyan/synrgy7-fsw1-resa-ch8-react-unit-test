import { Navigate, Outlet } from 'react-router';
import { DecryptUser } from '../utils/encryptionHelper';
import { UserResponse } from '../utils/dto/response/userResponse';

const keyUser = import.meta.env.VITE_LOCAL_STORAGE_KEY_USER as string;

const PublicRouteMiddleware: React.FC = () => {
  const user = localStorage.getItem(keyUser);
  if (user) {
    const decodedUser = DecryptUser(user as unknown as string) as UserResponse;
    if (decodedUser) {
      return <Navigate to="/" />;
    }
    localStorage.removeItem(keyUser);
    return <Outlet />;
  }

  return <Outlet />;
};

export default PublicRouteMiddleware;
