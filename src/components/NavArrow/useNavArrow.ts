import { Control, useFormState } from 'react-hook-form';

export const useNavArrow = (
  formControl: Control,
  isPrevious: boolean,
  isHidden: boolean
) => {
  const { isValid } = useFormState({
    control: formControl,
  });

  const classNames =
    'bg-[url("/assets/next.svg")] w-[18px] h-[23px] bg-no-repeat' +
    (isValid || isPrevious ? '' : ' opacity-50') +
    (isPrevious ? ' rotate-180' : '') +
    (isHidden ? ' invisible' : '');

  return { isValid, classNames };
};
