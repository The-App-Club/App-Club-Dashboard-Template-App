import {css, cx} from '@emotion/css';
import {memo} from 'react';
import 'hamburgers/dist/hamburgers.css';
import logo from '../assets/logo.png';
import {MdAccountCircle, MdOutlineChat} from 'react-icons/md';
import {RiBarChartFill} from 'react-icons/ri';
import {GrBeacon} from 'react-icons/gr';
import {RiNewspaperLine} from 'react-icons/ri';
import {MdNotificationsNone} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import {Profile} from './Profile';
import {Notification} from './Notification';

const Header = ({opened, handleClick}) => {
  const navigate = useNavigate();
  return (
    <header
      className={css`
        position: absolute;
        top: 0;
        min-height: 3rem;
        width: 100%;
        /* background: #f7f7f7; */
        z-index: 1;
      `}
    >
      <div
        className={css`
          min-height: 3rem;
          position: absolute;
          top: 10px;
          left: 10px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        `}
      >
        <div
          className={cx(
            `hamburger`,
            `hamburger--elastic`,
            `${opened ? 'is-active' : ''}`,
            css`
              padding: 0 !important;
              .hamburger-box,
              .hamburger-inner,
              .hamburger-inner::before,
              .hamburger-inner::after {
                width: 32px;
              }
            `
          )}
          tabIndex="0"
          aria-label="Menu"
          role="button"
          aria-controls="navigation"
          aria-expanded={opened}
          onClick={handleClick}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 0.1rem;
            :hover {
              cursor: pointer;
            }
          `}
          onClick={(e) => {
            navigate('/', {
              state: {},
            });
          }}
        >
          <div
            className={css`
              padding-left: 1rem;
              display: flex;
              justify-content: center;
              align-items: center;
              :hover {
                cursor: pointer;
              }
            `}
          >
            <img src={logo} alt={'logo'} width={40} />
          </div>
          <h3>Austin MidNight</h3>
        </div>
      </div>
      <div
        className={css`
          min-height: 3rem;
          position: absolute;
          top: 10px;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        `}
      >
        <Notification
          menuData={[
            {
              id: 0,
              name: `Analytics`,
              pathname: `/analytics`,
              icon: () => {
                return <RiBarChartFill size={24} />;
              },
            },
            {
              id: 1,
              name: `Moments`,
              pathname: `/moment`,
              icon: () => {
                return <GrBeacon size={24} />;
              },
            },
            {
              id: 2,
              name: `Newsletters`,
              pathname: `/newsletters`,
              icon: () => {
                return <RiNewspaperLine size={24} />;
              },
            },
          ]}
        />
        <Profile
          menuData={[
            {
              id: 0,
              name: `Topics`,
              pathname: `/topic`,
              icon: () => {
                return <MdOutlineChat size={24} />;
              },
            },
          ]}
        />
      </div>
    </header>
  );
};

export default memo(Header);
