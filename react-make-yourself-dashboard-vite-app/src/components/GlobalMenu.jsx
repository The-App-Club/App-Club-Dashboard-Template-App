import {css, cx} from '@emotion/css';
import {motion, useAnimationControls} from 'framer-motion';
import {useMemo, useState, useEffect, useRef, createRef} from 'react';
import {RiHome2Line} from 'react-icons/ri';
import {FaHatCowboySide} from 'react-icons/fa';
import {MdContactMail} from 'react-icons/md';
import {MdFace} from 'react-icons/md';
import {Button} from '@mui/material';

import image1 from '../assets/Multimedia-55.png';
import image2 from '../assets/Holidays-28.png';
import image3 from '../assets/Holidays-29.png';
import image4 from '../assets/Weather-03.png';
import {Link} from 'react-router-dom';

const GlobalMenu = () => {
  const contentMenuDomRef = useRef(null);
  const [info, setInfo] = useState({});
  const [activeIndex, setActiveIndex] = useState(-1);
  const controls = useAnimationControls();

  const imageData = useMemo(() => {
    return [image1, image2, image3, image4];
  }, []);

  const menuInfoList = useMemo(() => {
    return [
      {
        menuName: `home`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.`,
        icon: () => {
          return <RiHome2Line size={24} />;
        },
      },
      {
        menuName: `about`,
        description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
        icon: () => {
          return <MdFace size={24} />;
        },
      },
      {
        menuName: `work`,
        description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`,
        icon: () => {
          return <FaHatCowboySide size={24} />;
        },
      },
      {
        menuName: `contact`,
        description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested..`,
        icon: () => {
          return <MdContactMail size={24} />;
        },
      },
    ].map((item, index) => {
      return {...item, imageURL: imageData[index]};
    });
  }, [imageData]);

  const menusDomRef = useMemo(() => {
    return [...Array(menuInfoList.length).keys()].map((n) => {
      return createRef();
    });
  }, [menuInfoList]);

  useEffect(() => {
    // console.log(info.hovering);
    if (info.hovering) {
      controls.start({
        opacity: 1,
        left: info.x,
      });
    }
  }, [info]);

  return (
    <motion.ul
      className={cx(
        css`
          @media (max-width: 768px) {
            display: none;
          }
        `,
        `relative list-none flex items-center h-full`
      )}
    >
      {menuInfoList.map((menuInfo, index) => {
        return (
          <motion.li
            key={index}
            className={cx(
              css`
                min-width: 8rem;
                min-height: 3rem;
              `,
              `flex justify-center items-center gap-2 px-2`,
              `border-b-2 border-transparent hover:cursor-pointer hover:border-blue-600`
            )}
            ref={menusDomRef[index]}
            onHoverStart={(e) => {
              const contentMenuDom = contentMenuDomRef.current;
              contentMenuDom.classList.add('active');
              setActiveIndex(index);
              const offsetLeft =
                menusDomRef[0].current.getBoundingClientRect().left;
              const x = e.currentTarget.offsetLeft;
              setInfo({
                x,
                offsetLeft,
                hovering: true,
              });
            }}
            onHoverEnd={(e) => {
              const contentMenuDom = contentMenuDomRef.current;
              contentMenuDom.classList.remove('active');
              setActiveIndex(-1);
              const offsetLeft =
                menusDomRef[0].current.getBoundingClientRect().left;
              const x = e.currentTarget.offsetLeft;
              setInfo({
                x,
                offsetLeft,
                hovering: false,
              });
            }}
          >
            <div className={cx(css``, `flex justify-center items-center`)}>
              {menuInfo.icon()}
            </div>
            <h4>{menuInfo.menuName}</h4>
            <motion.div
              className={cx(
                css`
                  overflow: hidden;
                  opacity: 0;
                  position: absolute;
                  left: 0;
                  top: 3rem;
                  min-width: 18rem;
                  display: ${index === activeIndex ? 'block' : 'none'};
                `,
                `bg-white border-2 border-gray-200`
              )}
              animate={controls}
            >
              <ul
                ref={contentMenuDomRef}
                className={cx(
                  css`
                    width: 100%;
                  `
                )}
              >
                <li
                  className={cx(
                    css``,
                    `w-full hover:cursor-pointer hover:bg-gray-100 p-2`
                  )}
                >
                  <Link to={`/a`}>Sub Menu1</Link>
                </li>
                <li
                  className={cx(
                    css``,
                    `w-full hover:cursor-pointer hover:bg-gray-100 p-2`
                  )}
                >
                  <Link to={`/b`}>Sub Menu2</Link>
                </li>
                <li
                  className={cx(
                    css``,
                    `w-full hover:cursor-pointer hover:bg-gray-100 p-2`
                  )}
                >
                  <Link to={`/c`}>Sub Menu3</Link>
                </li>
              </ul>
            </motion.div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export {GlobalMenu};
