import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';

export const useVaccinePage = () => {
  const hadVaccineValue = useWatch({ name: 'had_vaccine' });
  const vaccinationStageValue = useWatch({ name: 'vaccination_stage' });
  const iAmWaitingValue = useWatch({ name: 'i_am_waiting' });
  const { setValue } = useFormContext();

  useEffect(() => {
    if (hadVaccineValue !== 'true') {
      setValue('vaccination_stage', null);
    } else if (hadVaccineValue !== 'false') {
      setValue('i_am_waiting', null);
    }
  }, [hadVaccineValue, setValue]);

  return { hadVaccineValue, vaccinationStageValue, iAmWaitingValue, setValue };
};
