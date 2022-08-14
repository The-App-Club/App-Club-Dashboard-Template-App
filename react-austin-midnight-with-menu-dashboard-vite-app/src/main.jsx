import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import '@fontsource/inter';
import './styles/index.scss';
import {Button} from '@mui/material';
import {useCallback, useState} from 'react';

import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';

import {Scrollbars} from 'rc-scrollbars';

import Header from './components/Header';
import {Sidebar} from './components/Sidebar';
import Breadcrumbs from './components/Breadcrumbs';

import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import {ContactPage} from './pages/contact';
import {WorkPage} from './pages/work';
import {NotFoundPage} from './pages/not-found';
import {LogoutPage} from './pages/logout';
import {MomentPage} from './pages/moment';
import {NewslettersPage} from './pages/newsletters';
import {SettingsPage} from './pages/settings';
import {AnalyticsPage} from './pages/analytics';
import {AnimatePresence} from 'framer-motion';
import {Layout as Popup} from './layouts/popup';
const App = () => {
  const location = useLocation();
  const [isTrigger, setIsTrigger] = useState(false);
  const [opened, setOpened] = useState(false);

  const doAutoCloseSideBar = useCallback((e) => {
    // console.log(e);
    setOpened(false);
  }, []);

  const handleClick = useCallback((e) => {
    setOpened((opened) => {
      return !opened;
    });
    setIsTrigger(true);
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
        `}
      >
        <Sidebar
          opened={opened}
          setOpened={setOpened}
          isTrigger={isTrigger}
          setIsTrigger={setIsTrigger}
        />
        <main
          className={cx(
            css`
              flex: 1;
              overflow: hidden;
              /* overflow-y: auto; */
            `
          )}
        >
          <AnimatePresence>
            {opened && (
              <Popup
                className={css`
                  height: 100%;
                  display: none;
                  @media (max-width: 768px) {
                    display: block;
                  }
                `}
              >
                <div
                  className={css`
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.3);
                  `}
                />
              </Popup>
            )}
          </AnimatePresence>
          <Breadcrumbs
            className={css`
              padding-left: 0.5rem;
              width: 100%;
            `}
            notifier={doAutoCloseSideBar}
          />
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
                  path={'/logout'}
                  element={
                    <LogoutPage
                      pageName={location.pathname}
                      notifier={doAutoCloseSideBar}
                    />
                  }
                />
                <Route
                  path={'/moment'}
                  element={
                    <MomentPage
                      pageName={location.pathname}
                      notifier={doAutoCloseSideBar}
                    />
                  }
                />
                <Route
                  path={'/newsletters'}
                  element={
                    <NewslettersPage
                      pageName={location.pathname}
                      notifier={doAutoCloseSideBar}
                    />
                  }
                />
                <Route
                  path={'/settings'}
                  element={
                    <SettingsPage
                      pageName={location.pathname}
                      notifier={doAutoCloseSideBar}
                    />
                  }
                />
                <Route
                  path={'/analytics'}
                  element={
                    <AnalyticsPage
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
