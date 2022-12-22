const FormHeader = (props: { pageNumber: number }) => {
  return (
    <header className='flex items-start justify-between h-12 border-b-2 border-brand-black'>
      <img src='/assets/redberry.png' alt='Redberry Logo' />
      <span className='font-anonymous text-4xl'>{props.pageNumber + 1}/4</span>
    </header>
  );
};

export default FormHeader;
