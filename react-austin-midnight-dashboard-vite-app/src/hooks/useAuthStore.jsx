import create from 'zustand';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const useAuthStore = create((set) => {
  return {
    jwtToken: cookies.get('jwtToken'),
    setJwtToken: ({jwtToken}) => {
      set((state) => {
        state.jwtToken = jwtToken;
        // 60seconds/1min * 60min/hours * 24hours * 365days keep cookies
        cookies.set('jwtToken', jwtToken, {
          secure: true,
          path: `/`,
          maxAge: 60 * 60 * 24 * 365,
        });
      });
    },
    removeJwtToken: () => {
      set((state) => {
        state.jwtToken = ``;
        cookies.remove('jwtToken', {
          secure: true,
          path: `/`,
          maxAge: 60 * 60 * 24 * 365,
        });
      });
    },
  };
});

export {useAuthStore};
