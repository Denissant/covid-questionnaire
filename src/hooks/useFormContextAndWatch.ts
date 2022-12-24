import { useFormContext, useWatch } from 'react-hook-form';

export const useFormContextAndWatch = (name: string) => {
  const form = useFormContext();
  const value = useWatch({
    name: name,
  });
  localStorage.setItem('form', JSON.stringify(form.getValues()));

  return { form, value };
};
