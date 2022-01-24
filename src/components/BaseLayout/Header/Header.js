import styles from '../../../styles/Sass/Header.module.scss';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import Dropdown from './Dropdown';
import { useState } from 'react';

const Header = () => {
   const [show, setShow] = useState(false);
   //Function handler
   const showDropdown = () => {
      setShow((prevState) => {
         return !prevState;
      })
   };
   return (
      <header className={styles.header}>
         <h2 className={styles.header__logo}>Logo</h2>
         <nav className={styles.header__nav}>
            <ul className={styles.header__nav__list__inline}>
               <li className={styles.header__nav__list__inline__item}>Categories</li>
               <li className={styles.header__nav__list__inline__item}>Top Rated</li>
               <li className={styles.header__nav__list__inline__item}>Last release</li>
            </ul>
            <button className={styles.header__nav__btn}>{show ? <GrClose size={25} onClick={showDropdown} /> : <FiMenu size={25} onClick={showDropdown} />}</button>
            {show && <Dropdown />}
         </nav>
      </header>
   );
};

export default Header;