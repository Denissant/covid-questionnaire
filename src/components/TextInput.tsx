import { FormError, FormLabel } from 'components';
import { useFormContextAndWatch } from 'hooks';

const TextInput = (props: {
  name: string;
  label: string;
  placeholder: string;
  labelIsHidden?: boolean;
  validationRules?: object;
}) => {
  const { form, value } = useFormContextAndWatch(props.name);

  return (
    <div className='flex flex-col mt-6'>
      <FormLabel
        name={props.name}
        label={props.label}
        hidden={props.labelIsHidden}
      />
      <input
        {...form.register(props.name, props.validationRules)}
        value={value}
        id={props.name}
        placeholder={props.placeholder}
        type='text'
        className='w-128 h-12 px-5 py-3 bg-transparent border-brand-black placeholder-neutral-400'
      />
      <FormError name={props.name} />
    </div>
  );
};

export default TextInput;
