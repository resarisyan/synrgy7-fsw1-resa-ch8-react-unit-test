import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  type: 'login' | 'register';
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  description,
  type,
}) => {
  return (
    <div className="grid grid-cols-5">
      <div className="md:col-span-3 w-full h-screen bg-[url('/images/bg-login.png')] bg-cover bg-center bg-no-repeat hidden md:block">
        <div className="w-full h-full flex justify-center items-center bg-[#0D28A6] bg-opacity-50"></div>
      </div>

      <div className="col-span-5 md:col-span-2 mx-auto md:mx-0">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md flex flex-col gap-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            {description && (
              <p className="text-gray-600 text-sm">{description}</p>
            )}
            {children}
            <p className="text-center text-sm text-gray-600">
              {type === 'login'
                ? "Don't have an account?"
                : 'Already have an account?'}
              <Link
                to={type === 'login' ? '/register' : '/login'}
                className="text-blue-500 ml-1"
              >
                {type === 'login' ? 'Register' : 'Login'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
