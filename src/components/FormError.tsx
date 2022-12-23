import { ErrorMessage } from '@hookform/error-message';
import { useFormState } from 'react-hook-form';

const FormError = (props: { name: string }) => {
  const { errors } = useFormState({ name: props.name });
  return (
    <ErrorMessage
      errors={errors}
      name={props.name}
      render={({ message }) => (
        <p className='mt-1.5 ml-5 text-brand-orange'>{message}</p>
      )}
    />
  );
};

export default FormError;
