import { Outlet } from 'react-router-dom';

const FormWrapper = () => {
  return (
    <main className='relative min-h-screen py-22 px-50'>
      <header></header>
      <Outlet />
      <nav></nav>
    </main>
  );
};

export default FormWrapper;
