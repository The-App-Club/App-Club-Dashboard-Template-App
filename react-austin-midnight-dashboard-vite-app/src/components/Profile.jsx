import {css, cx} from '@emotion/css';
import {ControlledMenu, MenuItem} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {useRef, useState} from 'react';
import {MdOutlineAccountCircle} from 'react-icons/md';
import {Link} from 'react-router-dom';

const Profile = ({menuData}) => {
  const menuDomRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      ref={menuDomRef}
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        :hover {
          cursor: pointer;
        }
      `}
      onClick={(e) => {
        if (!isOpen) {
          setOpen(true);
        }
      }}
    >
      <MdOutlineAccountCircle size={32} />
      <ControlledMenu
        state={isOpen ? 'open' : 'closed'}
        anchorRef={menuDomRef}
        onMouseLeave={() => {
          setOpen(false);
        }}
        onClose={() => {
          setOpen(false);
        }}
        className={cx(css``)}
      >
        {menuData.map((menuItem, index) => {
          return (
            <Link
              key={index}
              to={menuItem.pathname}
              className={css`
                text-decoration: none;
                color: initial;
              `}
            >
              <MenuItem
                className={cx(
                  css`
                    padding: 0.375rem 0.5rem 0.375rem 0.5rem;
                  `
                )}
              >
                {menuItem.icon()}
                <span
                  className={css`
                    padding-left: 0.5rem;
                  `}
                >
                  {menuItem.name}
                </span>
              </MenuItem>
            </Link>
          );
        })}
      </ControlledMenu>
    </div>
  );
};

export {Profile};
