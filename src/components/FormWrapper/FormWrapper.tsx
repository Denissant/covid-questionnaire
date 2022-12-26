import { Outlet } from 'react-router-dom';
import { FormHeader } from 'components';
import { useFormWrapper } from './useFormWrapper';
import { FormProvider } from 'react-hook-form';

const FormWrapper = () => {
  const { pageIndex, formRoutes, form } = useFormWrapper();

  return (
    <main className='max-h-screen py-22 px-50'>
      <FormHeader pageNumber={pageIndex + 1} />
      <section className='h-[calc(100vh-9.75rem)] overflow-y-auto overflow-x-hidden flex items-start justify-between'>
        <FormProvider {...form}>
          <Outlet context={{ pageIndex, formRoutes }} />
        </FormProvider>
      </section>
    </main>
  );
};

export default FormWrapper;
