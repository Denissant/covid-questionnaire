import { Outlet } from 'react-router-dom';

const Background = () => {
  return (
    <div className='max-h-screen w-full bg-brand-lightgray'>
      <Outlet />
    </div>
  );
};

export default Background;
