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
        `}
      >
        <h2>SettingsPage</h2>
        <Menu />
      </section>
    </Layout>
  );
};

export {SettingsPage};
