import { FormLabel } from 'components';
import FormError from './FormError';

const TextInput = (props: {
  name: string;
  label: string;
  placeholder: string;
  labelIsHidden?: boolean;
  error: string;
}) => {
  return (
    <div className='flex flex-col mt-6'>
      <FormLabel
        name={props.name}
        label={props.label}
        hidden={props.labelIsHidden}
      />
      <input
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type='text'
        className='w-128 h-12 px-5 py-3 bg-transparent border-brand-black placeholder-brand-black'
      />
      <FormError text={props.error} />
    </div>
  );
};

export default TextInput;
