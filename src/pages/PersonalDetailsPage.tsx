import { TextInput } from 'components';

const PersonalDetailsPage = () => {
  return (
    <>
      <form className='w-min'>
        <TextInput
          name='first_name'
          label='სახელი*'
          placeholder='იოსებ'
          error=''
        />
        <TextInput
          name='last_name'
          label='გვარი*'
          placeholder='ჯუღაშვილი'
          error=''
        />
        <TextInput
          name='email'
          label='მეილი*'
          placeholder='fbi@redberry.ge'
          error=''
        />
        <hr className='bg-black w-60 mt-20 mb-5' />
        <p className='w-72 text-brand-gray'>
          *-ით მონიშნული ველების შევსება სავალდებულოა
        </p>
      </form>
      <img
        src='/assets/background-personal-details.png'
        alt=''
        className='-mt-16 -mr-8'
      />
    </>
  );
};

export default PersonalDetailsPage;
