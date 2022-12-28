import { Form, RadioInput, Suggestion } from 'components';
import {
  hadVaccineOptions,
  iAmWaitingOptions,
  vaccinationStageOptions,
} from './radioOptions';
import { useVaccinePage } from './useVaccinePage';

const VaccinePage = () => {
  const { hadVaccineValue, vaccinationStageValue, iAmWaitingValue } =
    useVaccinePage();

  return (
    <>
      <Form navClasses='absolute bottom-24'>
        <RadioInput
          name='had_vaccine'
          label='უკვე აცრილი ხარ?*'
          options={hadVaccineOptions}
          validationRules={{ required: 'აირჩიე ერთ-ერთი პასუხი' }}
        />
        {hadVaccineValue === 'true' && (
          <RadioInput
            name='vaccination_stage'
            label='აირჩიე რა ეტაპზე ხარ*'
            options={vaccinationStageOptions}
            validationRules={{ required: 'აირჩიე ერთ-ერთი პასუხი' }}
          />
        )}
        {vaccinationStageValue === 'first_dosage_and_not_registered_yet' && (
          <Suggestion
            paragraphs={['რომ არ გადადო,', 'ბარემ ახლავე დარეგისტრირდი']}
            url='https://booking.moh.gov.ge/'
            linkText='https://booking.moh.gov.ge/'
          />
        )}
        {hadVaccineValue === 'false' && (
          <RadioInput
            name='i_am_waiting'
            label='რას ელოდები?*'
            options={iAmWaitingOptions}
            validationRules={{ required: 'აირჩიე ერთ-ერთი პასუხი' }}
          />
        )}
        {iAmWaitingValue === 'not_planning' && (
          <Suggestion
            url='https://booking.moh.gov.ge/'
            linkText='👉 https://booking.moh.gov.ge/'
          />
        )}
        {iAmWaitingValue === 'had_covid_and_planning_to_be_vaccinated' && (
          <Suggestion
            paragraphs={[
              'ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. ',
              ' ',
              '👉 რეგისტრაციის ბმული',
            ]}
            url='https://booking.moh.gov.ge/'
            linkText='https://booking.moh.gov.ge/'
          />
        )}
      </Form>
      <img
        src='/assets/background-vaccine.png'
        alt=''
        className='mt-16 pointer-events-none -mr-1 animate-fade-in'
      />
    </>
  );
};

export default VaccinePage;
