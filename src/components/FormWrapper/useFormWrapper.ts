import { useLocation } from 'react-router-dom';

export const useFormWrapper = () => {
  const formRoutes = [
    '/form/personal-details',
    '/form/covid',
    '/form/vaccine',
    '/form/policy',
  ];

  const { pathname } = useLocation();
  const pageIndex = formRoutes.indexOf(pathname);

  return { pageIndex, formRoutes };
};
