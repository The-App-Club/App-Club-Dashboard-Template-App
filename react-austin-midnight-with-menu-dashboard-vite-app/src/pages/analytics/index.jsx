import {css} from '@emotion/css';
import {Layout} from '../../layouts/default';
import {useAuthStore} from '../../hooks/useAuthStore';
import {useEffect} from 'react';

const AnalyticsPage = ({pageName, notifier}) => {
  const {jwtToken, setJwtToken} = useAuthStore((state) => {
    return {
      jwtToken: state.jwtToken,
      setJwtToken: state.setJwtToken,
    };
  });

  useEffect(() => {
    setJwtToken({jwtToken: 'cowboy'});
  }, [pageName]);

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
        <h2>AnalyticsPage</h2>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
      </section>
    </Layout>
  );
};

export {AnalyticsPage};
