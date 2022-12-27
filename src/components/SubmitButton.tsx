const SubmitButton = (props: { label: string }) => {
  return (
    <button className='w-45 h-14 mb-48 font-contractica text-lg text-white bg-brand-lightblue rounded-[42px] pt-1'>
      {props.label}
    </button>
  );
};

export default SubmitButton;
