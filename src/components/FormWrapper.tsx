import { Outlet, useLocation } from 'react-router-dom';
import FormHeader from './FormHeader';

const formRoutes = [
  '/form/personal-details',
  '/form/covid',
  '/form/vaccine',
  '/form/policy',
];

const FormWrapper = () => {
  const { pathname } = useLocation();
  const pageIndex = formRoutes.indexOf(pathname);

  return (
    <main className='relative min-h-screen py-22 px-50'>
      <FormHeader pageNumber={pageIndex + 1} />
      <Outlet />
      <nav></nav>
    </main>
  );
};

export default FormWrapper;
