import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Link
        to='/form/personal-details'
        className='hover:text-shadow mt-48 text-3xl w-min px-36 pb-28 text-center overflow-hidden'
      >
        <span
          id='landing-link'
          className='font-contractica text-brand-black inline-block'
        >
          კითხვარის დაწყება
        </span>
      </Link>
    </div>
  );
};

export default LandingPage;
