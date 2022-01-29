import styles from '../../../styles/Sass/Footer.module.scss';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Footer = () => {
   return(
      <footer className={styles.footer}>
         <div className={styles.footer__container}>
            <h4 className={styles.footer__container__title}>Company</h4>
            <ul className={styles.footer__container__links}>
               <li className={styles.footer__container__links__link}>About us</li>
               <li className={styles.footer__container__links__link}>Our services</li>
               <li className={styles.footer__container__links__link}>Contact us</li>
            </ul>
         </div>
         <div className={styles.footer__container}>
            <h4 className={styles.footer__container__title}>Get Help</h4>
            <ul className={styles.footer__container__links}>
               <li className={styles.footer__container__links__link}>FAQ</li>
               <li className={styles.footer__container__links__link}>Payment Questions</li>
            </ul>
         </div>
         <div className={styles.footer__container}>
            <h4 className={styles.footer__container__title}>Follow Us</h4>
            <ul className={styles.footer__container__links__social}>
               <li className={styles.footer__container__links__social__link}><FaFacebook size={20} /></li>
               <li className={styles.footer__container__links__social__link}><FaTwitter size={20} /></li>
               <li className={styles.footer__container__links__social__link}><FaInstagram size={20} /></li>
            </ul>
         </div>
      </footer>
   );
};

 export default Footer;