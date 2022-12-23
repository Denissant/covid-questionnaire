import { FormLabel } from 'components';
import FormError from './FormError';

const DateInput = (props: {
  name: string;
  label: string;
  placeholder: string;
  error: string;
}) => {
  return (
    <div className='flex flex-col mt-6'>
      <FormLabel name={props.name} label={props.label} />
      <input
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type='date'
        className='w-128 h-12 mt-3.5 ml-5 px-5 py-3 bg-transparent border-brand-black placeholder-brand-black'
      />
      <FormError text={props.error} />
    </div>
  );
};

export default DateInput;
