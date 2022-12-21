const LandingPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <a
        href='/'
        className='hover:text-shadow mt-48 text-3xl w-min px-36 pb-28 text-center overflow-hidden'
      >
        <span
          id='landing-link'
          className='font-contractica text-brand-black inline-block'
        >
          კითხვარის დაწყება
        </span>
      </a>
    </div>
  );
};

export default LandingPage;
