import styles from '../../../styles/Sass/Content.module.scss';
const Image = (props) => {
   return(
      <div className={styles.content__row__image}>
         <img src={props.image} alt="image" className={styles.content__row__image__img} />
         <div className={styles.content__row__image__overlay}>
            <p>{props.descri}</p>
         </div>
      </div>
   );
};

export default Image;