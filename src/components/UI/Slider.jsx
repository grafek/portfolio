import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getWindowSize, debounce } from "../../utils/functions";

const sliderVariants = {
  sliderHidden: { opacity: 0, scale: 0.3, x: -100 },
  sliderShown: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delay: 1.3,
      duration: 0.8,
    },
  },
};

const Slider = ({
  outerSliderClasses = "",
  innerSliderClasses = "",
  children,
}) => {
  const carouselRef = useRef(null);
  const [leftConstraints, setLeftConstraints] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowSize);

  useEffect(() => {
    setLeftConstraints(
      -(
        carouselRef?.current.scrollWidth -
        carouselRef?.current.offsetWidth +
        20
      )
    );

    // set initial left constraints

    const handleResize = () => {
      setWindowDimensions(getWindowSize());
      setTimeout(() => {
        setLeftConstraints(
          -(
            carouselRef?.current.scrollWidth -
            carouselRef?.current.offsetWidth +
            20
          )
        );
      }, 150);
    };
    // on resize set new dimensions forcing re-render and set new left constraints

    const handleResizeDebounced = debounce(handleResize, 100);

    window.addEventListener("resize", handleResizeDebounced);

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
      initial={"sliderHidden"}
      whileInView={"sliderShown"}
      className={`${outerSliderClasses} cursor-grab`}
      whileTap={{ cursor: "grabbing" }}
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
