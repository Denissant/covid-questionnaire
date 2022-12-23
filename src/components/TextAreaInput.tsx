import { FormLabel } from 'components';

const TextAreaInput = (props: { name: string; labels: string[] }) => {
  return (
    <div className='mt-12'>
      {props.labels.map((label, index) => (
        <div key={index}>
          <FormLabel name={props.name} label={label} />
        </div>
      ))}
      <textarea
        id={props.name}
        className='w-full h-46 mt-5 bg-transparent border-brand-black'
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
