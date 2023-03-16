import { Variants } from 'framer-motion';

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

export const projectsSliderVariants: Variants = {
  sliderHidden: { opacity: 0, scale: 0.5 },
  sliderShown: {
    opacity: 1,
    scale: 1,
    x: [0, -30, 30, 0],
    transition: {
      duration: 1.2,
      delay: 1.5,
      stiffnes: 300,
    },
  },
};

export const heroItemVariants: Variants = {
  heroHidden: { opacity: 0, x: -350 },
  heroShown: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      type: 'spring',
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

export const submitButtonVariants: Variants = {
  submitButtonShown: {
    opacity: 1,
    rotate: [0, 0, 0, -10, 10, 0],
    scale: [1, 1, 1, 1.1, 1.2, 1],
    transition: {
      duration: 0.8,
    },
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

export const headerButtonsVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const notificationVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: [1, 0.3], y: 50, transition: { duration: 0.2 } },
};

export const sidebarVariants: Variants = {
  open: {
    opacity: 0.95,
    clipPath: `circle(1000px at 50px 50px)`,
    transition: {
      type: 'spring',
      stiffness: 30,
      restDelta: 2,
      damping: 20,
    },
  },
  closed: {
    opacity: 0.95,
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
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export const varitantsLi: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const timelineItemVariants: Variants = {
  timelineHidden: { opacity: 0, y: -40 },
  timelineShown: {
    opacity: 1,
    y: 0,
  },
};

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
