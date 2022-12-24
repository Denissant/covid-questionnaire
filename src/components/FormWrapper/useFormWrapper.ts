import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const useFormWrapper = () => {
  const formRoutes = [
    '/form/personal-details',
    '/form/covid',
    '/form/vaccine',
    '/form/policy',
  ];

  const fields = [
    'first_name',
    'last_name',
    'email',
    'had_covid',
    'had_antibody_test',
    'test_date',
    'number',
    'covid_sickness_date',
    'had_vaccine',
    'vaccination_stage',
    'i_am_waiting',
    'non_formal_meetings',
    'number_of_days_from_office',
    'what_about_meetings_in_live',
    'tell_us_your_opinion_about_us',
  ];

  const { pathname } = useLocation();
  const pageIndex = formRoutes.indexOf(pathname);

  const cachedFieldValues = JSON.parse(localStorage.getItem('form') || '{}');
  const form = useForm({
    defaultValues: fields.reduce((values: { [key: string]: string }, key) => {
      values[key] = cachedFieldValues[key] || '';
      return values;
    }, {}),
    mode: 'onTouched',
  });

  return { pageIndex, formRoutes, form };
};
