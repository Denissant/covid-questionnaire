import { FormLabel } from 'components';

const RadioInput = (props: {
  name: string;
  label: string;
  options: { label: string; value: string }[];
}) => {
  return (
    <div className='flex flex-col mt-6 mb-7'>
      <FormLabel name={props.name} label={props.label} />
      {props.options.map((option, index) => (
        <div className='flex mb-4.5 items-start' key={index}>
          <input
            type='radio'
            id={option.value}
            name={props.name}
            value={option.value}
            className='w-6 h-6 mx-5 mt-0.5 bg-transparent border-brand-black border-[1.5px] text-brand-orange
                       checked:bg-brand-black checked:bg-[url("/assets/radio-ring.svg")]
                       checked:border-brand-black checked:bg-auto checked:hover:bg-neutral-600'
          />
          <label htmlFor={option.value} className='text-xl font-bold w-146'>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
