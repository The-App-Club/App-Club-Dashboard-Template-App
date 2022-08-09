import {css} from '@emotion/css';
import {Layout} from '../../layouts/default';
import {useAuthStore} from '../../hooks/useAuthStore';
import {useEffect} from 'react';

const LogoutPage = ({pageName, notifier}) => {
  const {jwtToken, removeJwtToken} = useAuthStore((state) => {
    return {
      jwtToken: state.jwtToken,
      removeJwtToken: state.removeJwtToken,
    };
  });

  useEffect(() => {
    removeJwtToken();
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
        <h2>LogoutPage</h2>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
      </section>
    </Layout>
  );
};

export {LogoutPage};
