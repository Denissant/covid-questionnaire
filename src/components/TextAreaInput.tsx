import { FormLabel } from 'components';
import { useFormContextAndWatch } from 'hooks';

const TextAreaInput = (props: { name: string; labels: string[] }) => {
  const { form, value } = useFormContextAndWatch(props.name);

  return (
    <>
      {props.labels.map((label, index) => (
        <div key={index}>
          <FormLabel name={props.name} label={label} />
        </div>
      ))}
      <textarea
        {...form.register(props.name)}
        value={value}
        id={props.name}
        className='w-full h-46 mt-5 bg-transparent border-brand-black'
      ></textarea>
    </>
  );
};

export default TextAreaInput;
