import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';

const motionConfig = {
  initial: {
    x: 0,
    y: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  hide: {
    x: 0,
    y: 60,
    opacity: 0,
  },
};

const Layout = ({children, className, pageName, notifier}) => {
  return (
    <motion.div
      variants={motionConfig}
      initial={'initial'}
      animate={'animate'}
      exit={'hide'}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
      className={cx(
        css`
          position: relative;
          width: 100%;
          padding: 1rem 0.5rem 2rem 0.5rem;
        `,
        className
      )}
      onAnimationStart={(e) => {}}
      onAnimationComplete={(e) => {
        notifier({pageName});
      }}
    >
      {children}
    </motion.div>
  );
};

export {Layout};
