const FormHeader = (props: { pageNumber: number }) => {
  return (
    <header className='sticky top-20 flex items-start justify-between h-12 border-b-2 border-brand-black mb-5'>
      <img src='/assets/redberry.png' alt='Redberry Logo' />
      <span className='font-anonymous text-4xl'>{props.pageNumber}/4</span>
    </header>
  );
};

export default FormHeader;
