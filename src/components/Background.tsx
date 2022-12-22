import { Outlet } from 'react-router-dom';

const Background = () => {
  return (
    <div className='min-h-screen bg-brand-lightgray'>
      <Outlet />
    </div>
  );
};

export default Background;
