import styles from '../../../styles/Sass/Header.module.scss';
const Dropdown = () => {
   return(
      <ul className={styles.header__nav__list}>
         <li className={styles.header__nav__list__item}>Categories</li>
         <li className={styles.header__nav__list__item}>Top Rated</li>
         <li className={styles.header__nav__list__item}>Last release</li>
      </ul>
   );
};

export default Dropdown;