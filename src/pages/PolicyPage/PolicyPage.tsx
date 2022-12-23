import { RadioInput, TextAreaInput, SubmitButton } from 'components';
import {
  nonFormalMeetingsOptions,
  numberOfDaysFromOfficeOptions,
} from './radioOptions';

const CovidPage = () => {
  return (
    <>
      <form className='w-min mb-18 animate-fade-in'>
        <div className='text-1.5xl mb-11 w-156'>
          <p className='mt-6 '>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p className='mt-7 text-1.5xl'>
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
        </div>
        <RadioInput
          name='non_formal_meetings'
          label='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'
          options={nonFormalMeetingsOptions}
        />
        <RadioInput
          name='number_of_days_from_office'
          label='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'
          options={numberOfDaysFromOfficeOptions}
        />
        <TextAreaInput
          name='what_about_meetings_in_live'
          labels={['რას ფიქრობ ფიზიკურ შეკრებებზე?']}
        />
        <TextAreaInput
          name='tell_us_your_opinion_about_us'
          labels={[
            'რას ფიქრობ არსებულ გარემოზე:',
            'რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?',
          ]}
        />
        <div className='text-right mt-13'>
          <SubmitButton label='დასრულება' />
        </div>
      </form>
      <img
        src='/assets/background-policy.png'
        alt=''
        className='mt-15 mr-13 animate-fade-in'
      />
    </>
  );
};

export default CovidPage;
