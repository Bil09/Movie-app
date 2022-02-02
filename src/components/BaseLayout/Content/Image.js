import styles from '../../../styles/Sass/Content.module.scss';
import {AiFillStar} from 'react-icons/ai';
const Image = (props) => {
   return(
      <div className={styles.content__row__image}>
         <img src={props.image} alt="image" className={styles.content__row__image__img} />
         <div className={styles.content__row__image__overlay}>
            <div className={styles.content__row__image__overlay__content}>
               <p className={styles.content__row__image__overlay__content__desc}>{props.descri}</p>
               <p className={styles.content__row__image__overlay__content__avg}><AiFillStar size={20} />{props.avg}</p>
            </div>
            
         </div>
      </div>
   );
};

export default Image;