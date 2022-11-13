import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getWindowSize, debounce } from "../../utils/Helper";



const Slider = ({
  outerSliderClasses = "",
  innerSliderClasses = "",
  children,
  sliderVariants
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

      {/* --- TODO: Add slider arrows 
      <div className="absolute flex items-center top-0 -left-2 h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="80"
          viewBox="0 0 256 256"
          onClick={() => alert("elo")}
          className=""
        >
          <path
            fill="#000"
            strokeMiterlimit="10"
            strokeWidth="0"
            d="M65.36 0L69.64 4.28 28.92 45 69.64 85.72 65.36 90 20.36 45z"
            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          ></path>
        </svg>
      </div>

      <div className="absolute flex items-center top-0 -right-2 h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="80"
          viewBox="0 0 256 256"
        >
          <path
            fill="#000"
            strokeMiterlimit="10"
            strokeWidth="0"
            d="M24.25 90a3.499 3.499 0 01-2.475-5.974L60.8 45 21.775 5.975a3.5 3.5 0 114.95-4.95l41.5 41.5a3.499 3.499 0 010 4.949l-41.5 41.5A3.487 3.487 0 0124.25 90z"
            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          ></path>
        </svg>
      </div> */}
    </motion.div>
  );
};

export default Slider;
