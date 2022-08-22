import {css, cx} from '@emotion/css';
import 'hamburgers/dist/hamburgers.css';
import {Hamburger} from './Hamburger';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

const Header = ({opened, handleClick}) => {
  return (
    <header
      className={cx(
        css`
          min-height: 3rem;
          z-index: 1;
        `,
        'fixed top-0 w-full flex items-center gap-3 bg-white'
      )}
    >
      <Hamburger opened={opened} handleClick={handleClick} className={`pl-2`} />
      <Link to={'/'} className={`flex items-center gap-1`}>
        <img src={logo} alt={`logo`} className={`w-10`} />
        <h2 className="text-lg">Make Yourself</h2>
      </Link>
    </header>
  );
};

export {Header};
