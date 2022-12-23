import { DateInput, RadioInput, TextInput } from 'components';
import { hadAntibodyTestOptions, hadCovidOptions } from './radioOptions';

const CovidPage = () => {
  return (
    <>
      <form className='w-min animate-fade-in'>
        <RadioInput
          name='had_covid'
          label='გაქვს გადატანილი Covid-19?*'
          options={hadCovidOptions}
        />
        <RadioInput
          name='had_antibody_test'
          label='ანტისხეულების ტესტი გაქვს გაკეთებული?*'
          options={hadAntibodyTestOptions}
        />
        <DateInput
          name='test_date'
          label='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*'
          placeholder='დდ/თთ/წწ'
          error=''
        />
        <div className='m-5'>
          <TextInput
            name='number'
            label='ანტისხეულების რაოდენობა'
            placeholder='ანტისხეულების რაოდენობა'
            labelIsHidden={true}
            error=''
          />
        </div>
        <DateInput
          name='covid_sickness_date'
          label='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
          placeholder='დდ/თთ/წწ'
          error=''
        />
      </form>
      <img
        src='/assets/background-covid.png'
        alt=''
        className='-mt-4 mr-3 animate-fade-in'
      />
    </>
  );
};

export default CovidPage;
