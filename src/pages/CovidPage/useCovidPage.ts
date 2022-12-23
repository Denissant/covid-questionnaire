import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';

export const useCovidPage = () => {
  const hadCovidValue = useWatch({ name: 'had_covid' });
  const hadAntibodyTestValue = useWatch({ name: 'had_antibody_test' });
  const { setValue } = useFormContext();

  useEffect(() => {
    if (hadCovidValue !== 'yes') {
      setValue('had_antibody_test', null);
    }
    if (hadAntibodyTestValue !== 'true') {
      setValue('test_date', '');
      setValue('number', '');
    } else if (hadAntibodyTestValue !== 'false') {
      setValue('covid_sickness_date', '');
    }
  }, [hadCovidValue, hadAntibodyTestValue, setValue]);

  return { hadCovidValue, hadAntibodyTestValue };
};
