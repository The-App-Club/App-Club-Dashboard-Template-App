import {css, cx} from '@emotion/css';
import {motion, useAnimationControls} from 'framer-motion';
import {useMemo, useState, useEffect, createRef} from 'react';
import {RiHome2Line} from 'react-icons/ri';
import {FaHatCowboySide} from 'react-icons/fa';
import {MdContactMail} from 'react-icons/md';
import {MdFace} from 'react-icons/md';
import {useDebouncedCallback} from 'use-debounce';

const Menu = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentMenuName, setCurrentMenuName] = useState('');
  const controls = useAnimationControls();

  const menuInfoList = useMemo(() => {
    return [
      {
        menuName: `home`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.`,
        icon: () => {
          return <RiHome2Line size={40} />;
        },
      },
      {
        menuName: `about`,
        description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
        icon: () => {
          return <MdFace size={40} />;
        },
      },
      {
        menuName: `work`,
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`,
        icon: () => {
          return <FaHatCowboySide size={40} />;
        },
      },
      {
        menuName: `contact`,
        description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested..`,
        icon: () => {
          return <MdContactMail size={40} />;
        },
      },
    ];
  }, []);

  const menuDomsRef = useMemo(() => {
    return menuInfoList.map((menuInfo) => {
      return createRef();
    });
  }, [menuInfoList]);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      if (currentMenuName) {
        controls.start({opacity: 1, x: left, y: top});
      } else {
        controls.start({opacity: 0, x: left, y: top});
      }
    } else {
      if (currentMenuName) {
        controls.start({opacity: 1, x: 0, y: top});
      } else {
        controls.start({opacity: 0, x: 0, y: top});
      }
    }
  }, [currentMenuName, top, left]);

  const handleResize = useDebouncedCallback((e) => {
    const menuDomList = menuDomsRef.map((menuDomRef) => {
      return menuDomRef.current;
    });
    const activeMenuDom = menuDomList[activeIndex];
    if (activeMenuDom) {
      setTop(activeMenuDom.offsetTop);
      setLeft(activeMenuDom.offsetLeft);
    }
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (e, {menuInfo}) => {
    console.log(`menuInfo`, menuInfo);
  };

  return (
    <div
      className={css`
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        border: 1px solid darkgray;
        width: 100%;
        min-height: 40rem;
        /* min-height: 140rem; */
        padding: 0.5rem;
        overflow-x: hidden;
        > ul.menu {
          flex-basis: 20%;
        }
        > div.menu-content {
          flex-basis: 80%;
        }
        @media (max-width: 768px) {
          flex-direction: column;
          > ul.menu {
            flex-basis: initial;
          }
          > div.menu-content {
            flex-basis: initial;
          }
        }
      `}
    >
      <ul
        className={cx(
          css`
            position: relative;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            @media (max-width: 768px) {
              justify-content: center;
              flex-direction: row;
            }
            border-radius: 10px;
            li {
              border-left: 3px solid;
              border-image-source: linear-gradient(
                0deg,
                #ffffff 0%,
                #ffffff 100%
              );
              @media (max-width: 768px) {
                border-left: none;
                border-bottom: 3px solid;
              }
              transition: color 250ms ease;
              min-height: 2rem;
              min-width: 4.5rem;
              width: 100%;
              @media (max-width: 768px) {
                width: initial;
              }
              font-weight: 400;
              display: flex;
              justify-content: flex-start;
              @media (max-width: 768px) {
                justify-content: center;
              }
              align-items: center;
              &.active {
                color: rgb(255, 255, 255);
              }
            }
          `,
          `menu`
        )}
      >
        <motion.li
          animate={controls}
          className={css`
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: -1;
            width: 100%;
            @media (max-width: 768px) {
              width: initial;
            }
            background-color: rgb(79, 101, 241);
            background-image: linear-gradient(
              90deg,
              rgb(111, 137, 251) 0%,
              rgb(97, 109, 245) 33%,
              rgb(92, 82, 235) 100%
            );
          `}
        />
        {menuInfoList.map((menuInfo, index) => {
          return (
            <motion.li
              key={index}
              ref={menuDomsRef[index]}
              onHoverStart={(e) => {
                setActiveIndex(index);
                setCurrentMenuName(menuInfo.menuName);
                setTop(e.target.offsetTop);
                setLeft(e.target.offsetLeft);
              }}
              onHoverEnd={(e) => {
                // setCurrentMenuName('');
              }}
              onClick={(e) => {
                handleClick(e, {menuInfo});
                setActiveIndex(index);
                setCurrentMenuName(menuInfo.menuName);
                setTop(e.target.offsetTop);
                setLeft(e.target.offsetLeft);
              }}
              className={cx(
                menuInfo.menuName,
                css`
                  cursor: pointer;
                  padding: 0 0.5rem;
                `,
                `${currentMenuName === menuInfo.menuName ? 'active' : ''}`
              )}
            >
              {menuInfo.menuName}
            </motion.li>
          );
        })}
      </ul>
      <div
        className={cx(
          css`
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
          `,
          `menu-content`
        )}
      >
        <motion.h2>{menuInfoList[activeIndex].menuName}</motion.h2>
        <motion.div>{menuInfoList[activeIndex].icon()}</motion.div>
        <motion.p>{menuInfoList[activeIndex].description}</motion.p>
      </div>
    </div>
  );
};

export {Menu};
