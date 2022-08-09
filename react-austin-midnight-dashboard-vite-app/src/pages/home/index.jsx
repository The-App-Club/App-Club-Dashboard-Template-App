import {css} from '@emotion/css';
import {useAuthStore} from '../../hooks/useAuthStore';
import {Layout} from '../../layouts/default';

const HomePage = ({pageName, notifier}) => {
  const {jwtToken, setJwtToken} = useAuthStore((state) => {
    return {
      jwtToken: state.jwtToken,
      setJwtToken: state.setJwtToken,
    };
  });

  console.log(`[home]jwtToken`, jwtToken);

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
        <h2>HomePage</h2>
        <p>something...</p>
        <p>something...</p>
        <p>something...</p>
      </section>
    </Layout>
  );
};

export {HomePage};
