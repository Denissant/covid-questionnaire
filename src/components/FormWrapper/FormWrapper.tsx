import { Outlet } from 'react-router-dom';
import { FormHeader, NavArrow } from '../../components';
import useFormWrapper from './useFormWrapper';

const FormWrapper = () => {
  const { pageIndex, formRoutes } = useFormWrapper();

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
