import { PropsWithChildren } from 'react';

const Form = (
  props: PropsWithChildren<{
    formClasses?: string;
    onSubmit?: () => {};
  }>
) => {
  return (
    <form
      onSubmit={props?.onSubmit}
      className={
        'relative min-h-[calc(100vh-19.5rem)] h-[calc(100vh-9.75rem)] w-160 animate-fade-in ' +
        props.formClasses
      }
    >
      {props.children}
    </form>
  );
};

export default Form;
