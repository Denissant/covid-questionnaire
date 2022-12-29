import { DateInput, Form, RadioInput, TextInput } from 'components';
import { hadAntibodyTestOptions, hadCovidOptions } from './radioOptions';
import { useCovidPage } from './useCovidPage';

const CovidPage = () => {
  const { hadCovidValue, hadAntibodyTestValue } = useCovidPage();

  return (
    <>
      <Form navClasses='absolute bottom-24'>
        <RadioInput
          name='had_covid'
          label='გაქვს გადატანილი Covid-19?*'
          options={hadCovidOptions}
          validationRules={{ required: 'აირჩიე ერთ-ერთი პასუხი' }}
        />
        {hadCovidValue === 'yes' && (
          <RadioInput
            name='had_antibody_test'
            label='ანტისხეულების ტესტი გაქვს გაკეთებული?*'
            options={hadAntibodyTestOptions}
            validationRules={{ required: 'აირჩიე ერთ-ერთი პასუხი' }}
          />
        )}

        {hadAntibodyTestValue === 'true' && (
          <>
            <DateInput
              name='test_date'
              label='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა'
              placeholder='დდ/თთ/წწ'
              validationRules={{
                validate: (value: string) =>
                  !value ||
                  Date.now() > new Date(value).getTime() ||
                  'შეყვანილი თარიღი არასწორია',
              }}
            />
            <div className='m-5'>
              <TextInput
                name='number'
                label='ანტისხეულების რაოდენობა'
                placeholder='ანტისხეულების რაოდენობა'
                labelIsHidden={true}
              />
            </div>
          </>
        )}
        {hadAntibodyTestValue === 'false' && (
          <DateInput
            name='covid_sickness_date'
            label='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
            placeholder='დდ/თთ/წწ'
            validationRules={{
              required: 'ამ ველის შევსება სავალდებულოა',
              validate: (value: string) =>
                Date.now() > new Date(value).getTime() ||
                'შეყვანილი თარიღი არასწორია',
            }}
          />
        )}
      </Form>
      <img
        src='/assets/background-covid.png'
        alt=''
        className='mt-1 mr-3 animate-fade-in'
      />
    </>
  );
};

export default CovidPage;
