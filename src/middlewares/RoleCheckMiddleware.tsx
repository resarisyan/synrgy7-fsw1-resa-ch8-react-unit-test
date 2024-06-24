import { Navigate, Outlet } from 'react-router';
import { UserResponse } from '../utils/dto/response/userResponse';
import { DecryptUser } from '../utils/encryptionHelper';

const keyUser = import.meta.env.VITE_LOCAL_STORAGE_KEY_USER as string;
export const RoleCheckMiddleware = ({
  allowedRoles,
}: {
  allowedRoles: string[];
}) => {
  const user = DecryptUser(
    localStorage.getItem(keyUser) as string
  ) as UserResponse;
  return user && allowedRoles.includes(user.role as string) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
