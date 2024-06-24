import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div
      className="col-span-2 bg-primary text-white h-full hidden md:block"
      data-testid="navbar"
    >
      <div className="flex items-center justify-center p-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <ul className="flex flex-col gap-4 p-4">
        <li>
          <a href="/dashboard" className="block py-2">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/car" className="block py-2">
            Car
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
