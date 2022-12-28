import { useFormState } from 'react-hook-form';

const FormError = (props: { name: string }) => {
  const { errors } = useFormState({ name: props.name });
  return (
    <p className='h-6 mt-1.5 ml-5 text-brand-orange'>
      {errors[props.name]?.message as string}
    </p>
  );
};

export default FormError;
