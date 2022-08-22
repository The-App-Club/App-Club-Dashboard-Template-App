import {css, cx} from '@emotion/css';
import {useNavigate} from 'react-router-dom';
import {useClickOutside} from '../hooks/useClickOutside';
import {useEffect, useRef} from 'react';
import gsap, {Power3} from 'gsap';
import {Hamburger} from './Hamburger';

import {FaHatCowboySide} from 'react-icons/fa';
import {RiAccountCircleLine} from 'react-icons/ri';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {MdOutlineLocalPolice} from 'react-icons/md';
import {GiChestnutLeaf} from 'react-icons/gi';

import {SidebarMenu} from './SidebarMenu';

const Sidebar = ({
  opened,
  setOpened,
  isTrigger,
  setIsTrigger,
  handleClick,
  sidebarMinWidth,
  sidebarMaxWidth,
  doneSidebarAction,
}) => {
  const asideDomRef = useRef();
  useClickOutside(asideDomRef, (e) => {
    if (!isTrigger) {
      setOpened(false);
    }
  });
  useEffect(() => {
    if (opened) {
      gsap.to(asideDomRef.current, {
        width: sidebarMaxWidth,
        duration: 0.4,
        ease: Power3.easeInOut,
        onComplete: function () {
          setIsTrigger(false);
          doneSidebarAction();
        },
      });
    } else {
      gsap.to(asideDomRef.current, {
        width: sidebarMinWidth,
        duration: 0.4,
        ease: Power3.easeInOut,
        onComplete: function () {
          setIsTrigger(false);
          doneSidebarAction();
        },
      });
    }
  }, [opened, sidebarMinWidth, sidebarMaxWidth]);

  return (
    <aside
      ref={asideDomRef}
      className={cx(
        css`
          &.open {
            width: 200px;
          }
          &.close {
            width: 48px;
            @media (max-width: 768px) {
              width: 0px;
            }
          }
          height: calc(100vh - 3rem);
        `,
        `${opened ? 'open' : 'close'}`,
        `border-r-2 overflow-x-hidden overflow-y-auto scrollbar-none bg-white`,
        css`
          position: fixed;
          top: 3rem;
          left: 0;
          z-index: 1;
        `
      )}
    >
      <nav className={cx(`w-full h-full border-r-2 border-gray-50`)}>
        <ul className={cx(`w-full flex justify-center items-center flex-col`)}>
          <SidebarMenu
            path={'/'}
            menuTitle={'Home'}
            icon={() => {
              return <FaHatCowboySide size={32} />;
            }}
          />
          <SidebarMenu
            path={'/membership'}
            menuTitle={'MemberShip'}
            icon={() => {
              return <RiAccountCircleLine size={32} />;
            }}
          />
          <SidebarMenu
            path={'/qa'}
            menuTitle={'QA'}
            icon={() => {
              return <AiOutlineQuestionCircle size={32} />;
            }}
          />
          <SidebarMenu
            path={'/policy'}
            menuTitle={'Policy'}
            icon={() => {
              return <MdOutlineLocalPolice size={32} />;
            }}
          />
          <SidebarMenu
            path={'/allergen'}
            menuTitle={'Allergen'}
            icon={() => {
              return <GiChestnutLeaf size={32} />;
            }}
          />
          {[...Array(15)].map((_, index) => {
            return (
              <SidebarMenu
                key={index}
                path={'/allergen'}
                menuTitle={'Allergen'}
                icon={() => {
                  return <GiChestnutLeaf size={32} />;
                }}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export {Sidebar};
