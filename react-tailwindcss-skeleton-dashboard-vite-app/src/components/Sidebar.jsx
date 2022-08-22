import {css, cx} from '@emotion/css';
import {motion, useAnimationControls} from 'framer-motion';
import {Link, useNavigate} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {FaHatCowboySide} from 'react-icons/fa';
import {MdContactMail} from 'react-icons/md';
import {TbCup} from 'react-icons/tb';
import {useClickOutside} from '../hooks/useClickOutside';
import {useEffect, useRef} from 'react';
import gsap, {Power3} from 'gsap';
import {Hamburger} from './Hamburger';

const SidebarMenu = ({path, menuTitle, icon}) => {
  const navigate = useNavigate();

  return (
    <li
      className={cx(
        css`
          width: 100%;
          min-height: 2rem;
        `,
        `flex items-center gap-2 px-2`,
        `border-r-2 border-transparent`,
        `hover:border-r-2 hover:border-blue-900 hover:bg-gray-100 hover:cursor-pointer`
      )}
      onClick={(e) => {
        navigate(path, {
          state: {},
        });
      }}
    >
      <div className={`flex items-center justify-center`}>{icon()}</div>
      <h4>{menuTitle}</h4>
    </li>
  );
};

const Sidebar = ({
  opened,
  setOpened,
  isTrigger,
  setIsTrigger,
  handleClick,
  className,
}) => {
  const navigate = useNavigate();
  const navContainerDomRef = useRef();
  const controls = useAnimationControls();

  useClickOutside(navContainerDomRef, (e) => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      return;
    }
    if (!isTrigger) {
      setOpened(false);
    }
  });
  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      return;
    }
    if (opened) {
      gsap.to(navContainerDomRef.current, {
        maxWidth: 200,
        duration: 0.6,
        ease: Power3.easeInOut,
        onComplete: function () {
          setIsTrigger(false);
        },
      });
    } else {
      gsap.to(navContainerDomRef.current, {
        maxWidth: 48,
        duration: 0.6,
        ease: Power3.easeInOut,
        onComplete: function () {
          setIsTrigger(false);
        },
      });
    }
  }, [opened]);

  return (
    <aside
      ref={navContainerDomRef}
      className={cx(
        css`
          overflow: hidden;
          width: 100%;
          height: calc(100vh - 3rem);
          /* transition: max-width 0.6s ease; */
          &.open {
            max-width: 200px;
          }
          &.close {
            max-width: 48px;
          },
        `,
        `${opened ? 'open' : 'close'}`,
        css`
          display: block;
          @media (max-width: 768px) {
            display: none;
          }
        `,
        `bg-white`,
        className
      )}
    >
      <nav className={cx(`w-full h-full border-r-2`)}>
        <ul
          className={cx(
            css`
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            `
          )}
        >
          <li
            className={cx(
              'menu-toggle',
              css`
                width: 100%;
                padding: 0 0.5rem;
              `,
              `border-b-2`
            )}
          >
            <Hamburger
              open={opened}
              handleClick={handleClick}
              className={css``}
            />
          </li>
          <SidebarMenu
            path={'/'}
            menuTitle={'Home'}
            icon={() => {
              return <FaHome size={32} />;
            }}
          />
          <SidebarMenu
            path={'/about'}
            menuTitle={'About'}
            icon={() => {
              return <FaHatCowboySide size={32} />;
            }}
          />
          <SidebarMenu
            path={'/contact'}
            menuTitle={'Contact'}
            icon={() => {
              return <MdContactMail size={32} />;
            }}
          />
          <SidebarMenu
            path={'/work'}
            menuTitle={'Work'}
            icon={() => {
              return <TbCup size={32} />;
            }}
          />
        </ul>
      </nav>
    </aside>
  );
};

export {Sidebar};
