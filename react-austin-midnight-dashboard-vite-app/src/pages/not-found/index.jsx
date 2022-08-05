import {css} from '@emotion/css';
import {Layout} from '../../layouts/default';

const NotFoundPage = ({pageName, notifier}) => {
  return (
    <Layout
      pageName={pageName}
      notifier={notifier}
      className={css`
        padding: 1rem;
      `}
    >
      <section
        className={css`
          border: 1px solid darkgray;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <h2>NotFoundPage</h2>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
      </section>
    </Layout>
  );
};

export {NotFoundPage};
