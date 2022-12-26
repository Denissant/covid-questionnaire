import { PropsWithChildren } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FormOutletContext } from '../types';
import { NavArrow } from './NavArrow';

const Form = (
  props: PropsWithChildren<{
    navClasses: string;
    formClasses?: string;
    onSubmit?: () => {};
  }>
) => {
  const { pageIndex, formRoutes } = useOutletContext<FormOutletContext>();

  return (
    <form
      onSubmit={props?.onSubmit}
      className={
        'relative min-h-[calc(100vh-19.5rem)] h-[calc(100vh-9.75rem)] w-160 animate-fade-in ' +
        props.formClasses
      }
    >
      {props.children}
      <nav
        className={'left-[110%] w-36 flex justify-between ' + props.navClasses}
      >
        {
          <NavArrow
            isHidden={pageIndex < 1}
            isPrevious={true}
            url={formRoutes[pageIndex - 1]}
          />
        }
        {
          <NavArrow
            isHidden={pageIndex > 2}
            isPrevious={false}
            url={formRoutes[pageIndex + 1]}
          />
        }
      </nav>
    </form>
  );
};

export default Form;
