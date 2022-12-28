import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      className='min-h-screen bg-brand-black flex flex-col items-center justify-center
                 font-contractica text-white text-[64px]'
    >
      404 Not Found
      <Link
        to='/'
        className='mt-12 text-3xl hover:underline text-blue-500 active:text-purple-700'
      >
        მთავარ გვერდზე დაბრუნება
      </Link>
    </div>
  );
};

export default NotFoundPage;
