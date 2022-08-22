import {css, cx} from '@emotion/css';
import {default as Layout} from '../../layouts/default';

const HomePage = ({pageName, notifier}) => {
  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={cx(`max-w-7xl mx-auto w-full h-full relative`, css``)}
      >
        <h2 className="text-3xl flex items-center justify-center">HomePage</h2>
        {[...Array(30)].map((_, index) => {
          return (
            <p
              key={index}
              className={cx(
                css`
                  min-height: 4rem;
                `,
                `flex items-center justify-center`
              )}
            >{`something... ${index}`}</p>
          );
        })}
      </section>
    </Layout>
  );
};

export {HomePage};
