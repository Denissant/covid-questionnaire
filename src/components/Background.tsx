import { PropsWithChildren } from 'react';

const Background = (props: PropsWithChildren) => {
  return (
    <div className='min-h-screen bg-brand-lightgray'>{props.children}</div>
  );
};

export default Background;
