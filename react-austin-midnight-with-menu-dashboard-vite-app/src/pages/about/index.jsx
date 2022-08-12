import {css} from '@emotion/css';
import {Layout} from '../../layouts/default';

const AboutPage = ({pageName, notifier}) => {
  return (
    <Layout pageName={pageName} notifier={notifier} className={css``}>
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
        <h2>AboutPage</h2>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
        {[...Array(60).keys()].map((n) => {
          return <p key={n}>something...</p>;
        })}
      </section>
    </Layout>
  );
};

export {AboutPage};
