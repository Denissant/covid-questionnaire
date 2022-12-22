import { Link } from 'react-router-dom';
import useNavArrow from './useNavArrow';

const NavArrow = (props: {
  isPrevious: boolean;
  isActive: boolean;
  isHidden: boolean;
  url: string;
}) => {
  const classes = useNavArrow(props.isActive, props.isPrevious, props.isHidden);

  return <Link className={classes} to={props.url}></Link>;
};

export default NavArrow;
