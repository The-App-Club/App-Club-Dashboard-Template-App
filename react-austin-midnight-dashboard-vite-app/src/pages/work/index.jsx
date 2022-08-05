import {css} from '@emotion/css';
import {Layout} from '../../layouts/default';

const WorkPage = ({pageName, notifier}) => {
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
        <h2>WorkPage</h2>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
      </section>
    </Layout>
  );
};

export {WorkPage};
