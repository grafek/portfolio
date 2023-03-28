import { Variants } from 'framer-motion';

export const sectionHeadingVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      delay: 0.3,
      type: 'spring',
    },
  },
};

export const headerButtonsVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const sidebarVariants: Variants = {
  open: {
    clipPath: `circle(1000px at 50px 50px)`,
    transition: {
      type: 'spring',
      stiffness: 30,
      restDelta: 2,
      damping: 20,
    },
  },
  closed: {
    clipPath: 'circle(20px at 28px 28px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  },
};

export const variantsUl: Variants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export const varitantsLi: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const heroVariants: Variants = {
  heroHidden: { opacity: 0 },
  heroShown: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      delayChildren: 1.5,
    },
  },
};

export const heroItemVariants: Variants = {
  heroHidden: { opacity: 0, x: '-100vw' },
  heroShown: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: 'spring',
    },
  },
};

export const projectsSliderVariants: Variants = {
  sliderHidden: { opacity: 0, scale: 0.8, x: '50vw' },
  sliderShown: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1.8,
      delay: 1.5,
      type: 'spring',
    },
  },
};

export const skillsVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.34,
      delayChildren: 1.2,
    },
  },
};

export const skillItemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const aboutVariants: Variants = {
  aboutHidden: { opacity: 0 },
  aboutShown: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};

export const aboutItemVariants: Variants = {
  aboutHidden: { opacity: 0, y: 50, scale: 0.7 },
  aboutShown: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

export const formVariants: Variants = {
  initial: { opacity: 0, y: '10vh' },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1.6,
      type: 'spring',
    },
  },
};

export const submitButtonVariants: Variants = {
  submitButtonShown: {
    opacity: 1,
    rotate: [0, 0, 0, -10, 10, 0],
    scale: [1, 1, 1, 1.1, 1.2, 1],
    transition: {
      duration: 0.8,
      delay:1
    },
  },
};

export const notificationVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: [1, 0.3], y: 50, transition: { duration: 0.2 } },
};
