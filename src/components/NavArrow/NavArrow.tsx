import { Link } from 'react-router-dom';
import { useNavArrow } from './useNavArrow';

const NavArrow = (props: {
  isPrevious: boolean;
  isHidden: boolean;
  url: string;
}) => {
  const { isValid, classNames, triggerFormValidation } = useNavArrow(
    props.isPrevious,
    props.isHidden
  );

  return isValid || props.isPrevious ? (
    <Link className={classNames} to={props.url} />
  ) : (
    <span className={classNames} onClick={() => triggerFormValidation()}></span>
  );
};

export default NavArrow;
