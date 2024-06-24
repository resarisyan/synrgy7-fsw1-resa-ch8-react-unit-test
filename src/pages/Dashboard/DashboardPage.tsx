import DashboardLayout from '../../components/layouts/DashboardLayout';
const DashboardPage: React.FC = () => {
  const breadcrumbData = [{ name: 'Home', link: '/' }, { name: 'Dashboard' }];

  return (
    <DashboardLayout breadcrumbs={breadcrumbData}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Welcome to the admin panel. You can manage your car rental
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
