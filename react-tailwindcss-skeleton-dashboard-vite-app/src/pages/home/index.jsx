import {css, cx} from '@emotion/css';
import {default as Layout} from '../../layouts/default';

const HomePage = ({pageName, notifier}) => {
  return (
    <Layout pageName={pageName} notifier={notifier} className={cx(css``, ``)}>
      <section
        className={cx(
          `max-w-full w-full relative`,
          css`
            min-height: 100vh;
          `
        )}
      >
        <h2 className="text-3xl flex items-center justify-center">HomePage</h2>
        {[...Array(100)].map((_, index) => {
          return (
            <p
              key={index}
              className="flex items-center justify-center"
            >{`something... ${index}`}</p>
          );
        })}
      </section>
    </Layout>
  );
};

export {HomePage};
