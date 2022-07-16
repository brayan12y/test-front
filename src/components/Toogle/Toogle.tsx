import { useEffect, useState } from 'react';
import { IconMoon } from '../../icons/Icons';
import './toogle.scss';

const Toogle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleActivedarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    darkMode
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.setAttribute('data-theme', 'light');
  }, [darkMode]);

  return (
    <div className='toogle__container'>
      <span
        role='button'
        className='toogle__wrapper'
        onClick={handleActivedarkMode}
      >
        {/* <img width={15} height={15} src={darkMode ? ligthSun : darkMoon} /> */}
        <IconMoon />
        <strong className='toogle__text'>
          {darkMode ? 'Ligth Mode' : 'Dark Mode'}
        </strong>
      </span>
    </div>
  );
};

export default Toogle;
