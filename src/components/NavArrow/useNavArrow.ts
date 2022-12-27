import { useFormContext } from 'react-hook-form';

export const useNavArrow = (isPrevious: boolean, isHidden: boolean) => {
  const { trigger, formState } = useFormContext();

  const isValid = formState.isValid;

  const classNames =
    'bg-[url("/assets/next.svg")] w-[18px] h-[23px] bg-no-repeat' +
    (isValid || isPrevious ? '' : ' opacity-50') +
    (isPrevious ? ' rotate-180' : '') +
    (isHidden ? ' invisible' : '');

  return { isValid, classNames, triggerFormValidation: trigger };
};
