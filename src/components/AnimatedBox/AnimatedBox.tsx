import { useAnimatedBox } from './useAnimatedBox';

const AnimatedBox = () => {
  const className = useAnimatedBox();

  return (
    <div className='absolute w-full h-screen overflow-hidden'>
      <div id='animated-box-wrapper' className={className}>
        <div id='animated-box-1'></div>
        <div id='animated-box-2'></div>
      </div>
    </div>
  );
};

export default AnimatedBox;
