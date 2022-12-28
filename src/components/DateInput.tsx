import { FormError, FormLabel } from 'components';
import { useFormContextAndWatch } from 'hooks';

const DateInput = (props: {
  name: string;
  label: string;
  placeholder: string;
  validationRules?: object;
}) => {
  const { form, value } = useFormContextAndWatch(props.name);

  return (
    <div className='flex flex-col mt-6'>
      <FormLabel name={props.name} label={props.label} />
      <input
        {...form.register(props.name, props.validationRules)}
        id={props.name}
        value={value}
        placeholder={props.placeholder}
        type='date'
        className='w-128 h-12 mt-3.5 ml-5 px-5 py-3 bg-transparent border-brand-black'
      />
      <FormError name={props.name} />
    </div>
  );
};

export default DateInput;
