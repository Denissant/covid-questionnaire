import { RadioInput, Suggestion } from 'components';
import {
  hadVaccineOptions,
  iAmWaitingOptions,
  vaccinationStageOptions,
} from './radioOptions';

const CovidPage = () => {
  return (
    <>
      <form className='w-min animate-fade-in'>
        <RadioInput
          name='had_vaccine'
          label='უკვე აცრილი ხარ?*'
          options={hadVaccineOptions}
        />
        <RadioInput
          name='vaccination_stage'
          label='აირჩიე რა ეტაპზე ხარ*'
          options={vaccinationStageOptions}
        />
        <Suggestion
          paragraphs={['რომ არ გადადო,', 'ბარემ ახლავე დარეგისტრირდი']}
          url='https://booking.moh.gov.ge/'
          linkText='https://booking.moh.gov.ge/'
        />
        <RadioInput
          name='i_am_waiting'
          label='რას ელოდები?*'
          options={iAmWaitingOptions}
        />
        <Suggestion
          paragraphs={[
            'ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. ',
            ' ',
            '👉 რეგისტრაციის ბმული',
          ]}
          url='https://booking.moh.gov.ge/'
          linkText='https://booking.moh.gov.ge/'
        />
        <Suggestion
          url='https://booking.moh.gov.ge/'
          linkText='👉 https://booking.moh.gov.ge/'
        />
      </form>
      <img
        src='/assets/background-vaccine.png'
        alt=''
        className='mt-11 -mr-1 animate-fade-in'
      />
    </>
  );
};

export default CovidPage;
