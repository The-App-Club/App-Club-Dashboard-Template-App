import {css} from '@emotion/css';
import {Menu} from '../../components/Menu';
import {Layout} from '../../layouts/default';

const SettingsPage = ({pageName, notifier}) => {
  return (
    <Layout pageName={pageName} notifier={notifier} className={css``}>
      <section
        className={css`
          width: 100%;
          max-width: 60rem;
          margin: 0 auto;
          h2 {
            position: sticky;
            top: 0;
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            z-index: 1;
          }
        `}
      >
        <h2>SettingsPage</h2>
        <Menu />
      </section>
    </Layout>
  );
};

export {SettingsPage};
