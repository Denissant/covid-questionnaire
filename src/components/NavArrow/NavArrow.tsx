import { Link } from 'react-router-dom';
import { useNavArrow } from './useNavArrow';
import { Control } from 'react-hook-form';

const NavArrow = (props: {
  isPrevious: boolean;
  isHidden: boolean;
  url: string;
  formControl: Control<any>;
  triggerFormValidation: () => {};
}) => {
  const { isValid, classNames } = useNavArrow(
    props.formControl,
    props.isPrevious,
    props.isHidden
  );

  return isValid || props.isPrevious ? (
    <Link className={classNames} to={props.url} />
  ) : (
    <span
      className={classNames}
      onClick={() => props.triggerFormValidation()}
    ></span>
  );
};

export default NavArrow;
