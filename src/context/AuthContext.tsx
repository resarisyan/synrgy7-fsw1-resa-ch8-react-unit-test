import { createContext, ReactNode } from 'react';
import { UserResponse } from '../utils/dto/response/userResponse';
import { DecryptUser } from '../utils/encryptionHelper';

const keyUser = import.meta.env.VITE_LOCAL_STORAGE_KEY_USER as string;

interface AuthContextProps {
  getUser: () => UserResponse | null;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const getUser = () => {
    const user = localStorage.getItem(keyUser);
    if (user) {
      return DecryptUser(user as unknown as string) as UserResponse;
    }
    return null;
  };

  return (
    <AuthContext.Provider value={{ getUser }}>{children}</AuthContext.Provider>
  );
};
