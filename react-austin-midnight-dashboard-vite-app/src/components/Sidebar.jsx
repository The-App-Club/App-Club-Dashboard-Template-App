import {css, cx} from '@emotion/css';
import {motion, useAnimationControls} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {FaHatCowboySide} from 'react-icons/fa';
import {MdContactMail} from 'react-icons/md';
import {TbCup} from 'react-icons/tb';
import {useClickOutside} from '../hooks/useClickOutside';
import {useEffect, useRef} from 'react';
import gsap, {Power3} from 'gsap';

const Sidebar = ({opened, setOpened, isTrigger, setIsTrigger}) => {
  const navigate = useNavigate();
  const navContainerDomRef = useRef();
  const controls = useAnimationControls();

  useClickOutside(navContainerDomRef, (e) => {
    if (!isTrigger) {
      setOpened(false);
    }
  });
  useEffect(() => {
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
        maxWidth: window.matchMedia('(max-width: 768px)').matches ? 0 : 48,
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
          /* border: 1px solid darkgray; */
          /* transition: max-width 0.6s ease; */
          /* &.open {
            max-width: 200px;
          }
          &.close {
            max-width: 48px;
            @media (max-width: 768px) {
              max-width: 0px;
            }
          } */
        `
        // `${opened ? 'open' : 'close'}`
      )}
    >
      <nav
        className={cx(
          css`
            width: 100%;
            height: 100%;
            padding: 1rem 0;
            border-right: 1px solid darkgrey;
          `
        )}
      >
        <ul
          className={cx(
            css`
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              li {
                display: flex;
                align-items: center;
                padding: 0 0.5rem;
                gap: 0.5rem;
                min-height: 2rem;
                width: 100%;
                :hover {
                  cursor: pointer;
                  background: #f7f7f7;
                }
              }
            `
          )}
        >
          <li
            onClick={(e) => {
              navigate('/', {
                state: {},
              });
            }}
          >
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              <FaHome size={32} />
            </div>
            <h4>Home</h4>
          </li>
          <li
            onClick={(e) => {
              navigate('/about', {
                state: {},
              });
            }}
          >
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              <FaHatCowboySide size={32} />
            </div>
            <h4>About</h4>
          </li>
          <li
            onClick={(e) => {
              navigate('/contact', {
                state: {},
              });
            }}
          >
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              <MdContactMail size={32} />
            </div>
            <h4>Contact</h4>
          </li>
          <li
            onClick={(e) => {
              navigate('/work', {
                state: {},
              });
            }}
          >
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              <TbCup size={32} />
            </div>
            <h4>Work</h4>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export {Sidebar};
