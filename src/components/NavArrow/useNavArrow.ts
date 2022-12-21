function useNavArrow(
  isActive: boolean,
  isPrevious: boolean,
  isHidden: boolean
) {
  return (
    'bg-[url("/assets/next.svg")] w-[18px] h-[23px] bg-no-repeat' +
    (isActive ? '' : ' opacity-50') +
    (isPrevious ? ' rotate-180' : '') +
    (isHidden ? ' invisible' : '')
  );
}

export default useNavArrow;
