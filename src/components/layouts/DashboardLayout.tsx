import React from 'react';
import Navbar from '../fragments/Dashboard/Navbar';
import Header from '../fragments/Dashboard/Header';
import { Link } from 'react-router-dom';

interface Breadcrumb {
  name: string;
  link?: string;
}

interface DashboardProps {
  children: React.ReactNode;
  breadcrumbs: Breadcrumb[];
}

const DashboardLayout: React.FC<DashboardProps> = ({
  children,
  breadcrumbs,
}) => {
  return (
    <main className="grid grid-cols-12 bg-gray-100 h-screen w-full">
      <Navbar />
      <div className="col-span-12 md:col-span-10 flex flex-col gap-y-4">
        <Header />
        <div className="flex flex-col gap-4 p-6">
          <div className="text-sm breadcrumbs">
            <ul>
              {breadcrumbs.map((breadcrumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={index}>
                    {breadcrumb.link && !isLast ? (
                      <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
                    ) : (
                      <span className={isLast ? 'font-bold' : ''}>
                        {breadcrumb.name}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
