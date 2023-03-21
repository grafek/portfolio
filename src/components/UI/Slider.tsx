import { motion, type Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { debounce, getWindowSize } from '../../utils/helpers';

type SliderProps = {
  children: React.ReactNode;
  outerSliderClasses?: string;
  innerSliderClasses?: string;
  sliderVariants?: Variants;
};

const Slider: React.FC<SliderProps> = ({
  outerSliderClasses = '',
  innerSliderClasses = '',
  children,
  sliderVariants,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [leftConstraints, setLeftConstraints] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowSize);

  useEffect(() => {
    if (!carouselRef.current) return;

    setLeftConstraints(
      -(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth + 20)
    );

    // set initial left constraints

    const handleResize = () => {
      setWindowDimensions(getWindowSize());
      setTimeout(() => {
        if (!carouselRef.current) return;
        setLeftConstraints(
          -(
            carouselRef.current.scrollWidth -
            carouselRef.current.offsetWidth +
            20
          )
        );
      }, 150);
    };
    // on resize set new dimensions forcing re-render and set new left constraints

    const handleResizeDebounced = debounce(handleResize, 100);

    window.addEventListener('resize', handleResizeDebounced);

    //listen for resize event

    return () => {
      window.removeEventListener(`resize`, handleResizeDebounced);
      // cleanup
    };
  }, []);

  return (
    <motion.div
      ref={carouselRef}
      variants={sliderVariants}
      initial={'sliderHidden'}
      viewport={{ once: true }}
      whileInView={'sliderShown'}
      className={`${outerSliderClasses} cursor-grab`}
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
        drag="x"
        dragConstraints={{ right: 0, left: leftConstraints }}
        className={`${innerSliderClasses} flex`}
        key={JSON.stringify(windowDimensions)}
        // key prop to re-render after change of window dimensions to prevent bugs
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
