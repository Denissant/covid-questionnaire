import { FormError, FormLabel } from 'components';
import { useFormContextAndWatch } from 'hooks';

const RadioInput = (props: {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  validationRules?: object;
}) => {
  const { form, value } = useFormContextAndWatch(props.name);

  return (
    <div className='flex flex-col'>
      <FormLabel name={props.name} label={props.label} />
      {props.options.map((option, index) => (
        <div className='flex mb-4.5 items-start' key={index}>
          <input
            {...form.register(props.name, props.validationRules)}
            type='radio'
            id={option.value}
            value={option.value}
            className='w-6 h-6 mx-5 mt-0.5 bg-transparent border-brand-black border-[1.5px] text-brand-orange
                       checked:bg-brand-black checked:bg-[url("/assets/radio-ring.svg")]
                       checked:border-brand-black checked:bg-auto checked:hover:bg-neutral-600'
            checked={value === option.value}
          />
          <label htmlFor={option.value} className='text-xl font-bold w-146'>
            {option.label}
          </label>
        </div>
      ))}
      <FormError name={props.name} />
    </div>
  );
};

export default RadioInput;
