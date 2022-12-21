import { Link } from 'react-router-dom';

const NavArrow = (props: {
  isPrevious: boolean;
  isActive: boolean;
  isHidden: boolean;
  url: string;
}) => {
  const classes =
    'bg-[url("/assets/next_2.svg")] w-[18px] h-[23px] bg-no-repeat' +
    (props.isActive ? '' : ' opacity-50') +
    (props.isPrevious ? ' rotate-180' : '') +
    (props.isHidden ? ' invisible' : '');

  return <Link className={classes} to={props.url}></Link>;
};

export default NavArrow;
