const Suggestion = (props: {
  paragraphs?: string[];
  url: string;
  linkText: string;
}) => {
  return (
    <div className='w-[30rem] font-bold text-xl mt-5.5 ml-15 whitespace-pre-wrap'>
      {props.paragraphs?.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      <a className='text-brand-link' href={props.url}>
        {props.linkText}
      </a>
    </div>
  );
};

export default Suggestion;
