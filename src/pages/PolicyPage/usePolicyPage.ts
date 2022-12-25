import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const usePolicyPage = () => {
  const { handleSubmit } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = async (formData: { [key: string]: string | boolean }) => {
    for (const [key, value] of Object.entries(formData)) {
      if (key === 'had_antibody_test' || key === 'had_vaccine') {
        formData[key] = Boolean(value);
      }
      if (!value) delete formData[key];
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
