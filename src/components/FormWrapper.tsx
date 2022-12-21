import { Outlet, useLocation } from 'react-router-dom';
import NavArrow from './NavArrow';
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
      <nav className='absolute bottom-22 left-1/2 -translate-x-1/2 w-36 flex justify-between'>
        {
          <NavArrow
            isHidden={pageIndex < 1}
            isPrevious={true}
            isActive={true}
            url={formRoutes[pageIndex - 1]}
          />
        }
        {
          <NavArrow
            isHidden={pageIndex > 2}
            isPrevious={false}
            isActive={true}
            url={formRoutes[pageIndex + 1]}
          />
        }
      </nav>
    </main>
  );
};

export default FormWrapper;
