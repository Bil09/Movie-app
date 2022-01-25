import styles from '../../../styles/Sass/Content.module.scss';
import img from '../../../furious.jpg'
const Row = (props) => {
   return(
      <div className={styles.content__row}>
         <img src={img} alt="image" className={styles.content__row__img} />
         <img src={img} alt="image" className={styles.content__row__img} />
         <img src={img} alt="image" className={styles.content__row__img} />
         <img src={img} alt="image" className={styles.content__row__img} />
         <img src={img} alt="image" className={styles.content__row__img} />
         <img src={img} alt="image" className={styles.content__row__img} />
         <img src={img} alt="image" className={styles.content__row__img} />
         <img src={img} alt="image" className={styles.content__row__img} />
      </div>
   );
};
export default Row;