import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import '@fontsource/inter';
import './styles/index.scss';
import {Button} from '@mui/material';
import {useCallback, useState} from 'react';

import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';

import {Scrollbars} from 'rc-scrollbars';

import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import {ContactPage} from './pages/contact';
import {WorkPage} from './pages/work';
import Header from './components/Header';
import {Sidebar} from './components/Sidebar';
import {NotFoundPage} from './pages/not-found';

const App = () => {
  const location = useLocation();

  const [opened, setOpened] = useState(false);

  const doAutoCloseSideBar = useCallback((e) => {
    // console.log(e);
    setOpened(false);
  }, []);

  const handleClick = useCallback((e) => {
    setOpened((opened) => {
      return !opened;
    });
  }, []);

  return (
    <div
      className={css`
        width: 100%;
        position: relative;
      `}
    >
      <Header opened={opened} handleClick={handleClick} />
      <div
        className={css`
          position: absolute;
          top: 3rem;
          width: 100%;
          display: flex;
          aside {
            overflow: hidden;
            transition: max-width 0.6s ease;
            width: 100%;
            height: calc(100vh - 3rem);
            /* border: 1px solid darkgray; */
            &.open {
              max-width: 200px;
            }
            &.close {
              max-width: 48px;
              @media (max-width: 768px) {
                max-width: 0px;
              }
            }
          }
        `}
      >
        <Sidebar opened={opened} />
        <main
          className={cx(
            css`
              flex: 1;
              overflow: hidden;
              overflow-y: auto;
            `
          )}
        >
          <Scrollbars
            className={css`
              width: 100%;
            `}
          >
            <article>
              <Routes location={location}>
                <Route
                  path={'/'}
                  element={
                    <HomePage
                      pageName={location.pathname}
                      notifier={doAutoCloseSideBar}
                    />
                  }
                />
                <Route
                  path={'/about'}
                  element={
                    <AboutPage
                      pageName={location.pathname}
                      notifier={doAutoCloseSideBar}
                    />
                  }
                />
                <Route
                  path={'/contact'}
                  element={
                    <ContactPage
                      pageName={location.pathname}
                      notifier={doAutoCloseSideBar}
                    />
                  }
                />
                <Route
                  path={'/work'}
                  element={
                    <WorkPage
                      pageName={location.pathname}
                      notifier={doAutoCloseSideBar}
                    />
                  }
                />
                <Route
                  path={'/*'}
                  element={
                    <NotFoundPage
                      pageName={location.pathname}
                      notifier={doAutoCloseSideBar}
                    />
                  }
                />
              </Routes>
            </article>
          </Scrollbars>
        </main>
      </div>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
