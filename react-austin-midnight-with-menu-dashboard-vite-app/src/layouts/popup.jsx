import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';

const motionConfig = {
  initial: {
    x: 0,
    y: 20,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
  hide: {
    x: 0,
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
      delay: 0.8,
    },
  },
};

const Layout = ({children, className}) => {
  return (
    <motion.div
      variants={motionConfig}
      initial={'initial'}
      animate={'animate'}
      exit={'hide'}
      className={cx(
        css`
          position: relative;
          width: 100%;
        `,
        className
      )}
      onAnimationStart={(e) => {}}
      onAnimationComplete={(e) => {}}
    >
      {children}
    </motion.div>
  );
};

export {Layout};
