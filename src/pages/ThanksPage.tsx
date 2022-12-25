const ThanksPage = () => {
  return (
    <div
      className='min-h-screen bg-brand-black flex items-center justify-center 
                 font-contractica text-white text-[64px] tracking-[0.24em]'
    >
      <span id='thanks-text' className='animate-fade-in-delayed opacity-0'>
        მადლობა
      </span>
      <div
        id='thanks-sparkle-lg'
        className='w-[53px] h-[53px] opacity-0 absolute bg-contain bg-[url("/assets/sparkle.svg")]'
      ></div>
      <div
        id='thanks-sparkle-sm'
        className='w-[33px] h-[33px] opacity-0 absolute bg-contain bg-[url("/assets/sparkle.svg")]'
      ></div>
    </div>
  );
};

export default ThanksPage;
