import { Fragment } from 'react';
import Toogle from '../../components/Toogle/Toogle';
import './header.scss';

const Header = () => {
  return (
    <header className='header__container'>
      <div className='header__container--wrapper'>
        <div className='header__container--title'>
          <strong>Where in the world?</strong>
        </div>
        <Fragment>
          <Toogle />
        </Fragment>
      </div>
    </header>
  );
};

export default Header;
