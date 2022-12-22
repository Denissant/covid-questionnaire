import { useLocation } from 'react-router-dom';

export const useAnimatedBox = () => {
  const pathsToClassNamesMap: { [key: string]: string } = {
    '/': 'logo',
    '/form/personal-details': 'rectangle',
    '/form/covid': 'circle',
    '/form/vaccine': 'star',
    '/form/policy': 'heart',
  };

  const { pathname } = useLocation();
  return pathsToClassNamesMap[pathname] ?? '';
};
