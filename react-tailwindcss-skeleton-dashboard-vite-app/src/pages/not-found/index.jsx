import {css, cx} from '@emotion/css';
import {Link} from 'react-router-dom';
import {Spacer} from '../../components/Spacer';
import {default as Layout} from '../../layouts/default';

const NotFoundPage = ({pageName, notifier}) => {
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
        <h2 className="text-3xl flex items-center justify-center">Not Found</h2>
        <Link
          to={'/'}
          className={`flex items-center justify-center hover:underline`}
        >
          Back to home
        </Link>
      </section>
    </Layout>
  );
};

export {NotFoundPage};
