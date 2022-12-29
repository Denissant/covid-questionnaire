import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormFields } from 'types';

export const usePolicyPage = () => {
  const { handleSubmit } = useFormContext<FormFields>();
  const navigate = useNavigate();

  const onSubmit = async (formData: FormFields) => {
    for (const [key, value] of Object.entries(formData) as [
      keyof FormFields,
      string
    ][]) {
      if (!value) {
        delete formData[key];
        continue;
      }
      if (key === 'had_antibody_test' || key === 'had_vaccine') {
        formData[key] = value === 'true';
      }
      if (key === 'test_date' || key === 'number') {
        if (!formData['antibodies']) formData['antibodies'] = {};
        formData['antibodies'][key] = value;
        delete formData[key];
      }
    }

    const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      const errors = await response.json();
      alert(`Error: ${errors.message}`);
    } else {
      navigate('/thanks');
    }
  };

  return { handleSubmit, onSubmit };
};
