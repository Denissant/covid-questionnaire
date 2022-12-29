import { Form, TextInput } from 'components';

const PersonalDetailsPage = () => {
  return (
    <>
      <Form navClasses='absolute bottom-24'>
        <TextInput
          name='first_name'
          label='სახელი*'
          placeholder='იოსებ'
          validationRules={{
            required: 'სახელის ველის შევსება სავალდებულოა',
            minLength: {
              value: 2,
              message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
            },
            maxLength: {
              value: 256,
              message: 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 256 სიმბოლოსგან',
            },
          }}
        />
        <TextInput
          name='last_name'
          label='გვარი*'
          placeholder='ჯუღაშვილი'
          validationRules={{
            required: 'გვარის ველის შევსება სავალდებულოა',
            minLength: {
              value: 2,
              message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
            },
            maxLength: {
              value: 256,
              message: 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 256 სიმბოლოსგან',
            },
          }}
        />
        <TextInput
          name='email'
          label='მეილი*'
          placeholder='fbi@redberry.ge'
          validationRules={{
            required: 'მეილის ველის შევსება სავალდებულოა',
            maxLength: {
              value: 256,
              message: 'მეილის ველი უნდა შედგებოდეს მაქსიმუმ 256 სიმბოლოსგან',
            },
            pattern: {
              value: /^[^.][^\s@]*@redberry\.ge+$/,
              message:
                'შეიყვანე ვალიდური რედბერის მეილი (უნდა ბოლოვდებოდეს @redberry.ge-ით)',
            },
          }}
        />
        <hr className='bg-black w-60 mt-20 mb-5' />
        <p className='w-72 text-brand-gray'>
          *-ით მონიშნული ველების შევსება სავალდებულოა
        </p>
      </Form>
      <img
        src='/assets/background-personal-details.png'
        alt=''
        className='-mt-11 -mr-8 animate-fade-in'
      />
    </>
  );
};

export default PersonalDetailsPage;
