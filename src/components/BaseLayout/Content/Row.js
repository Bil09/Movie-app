import styles from '../../../styles/Sass/Content.module.scss';
import img from '../../../furious.jpg'
import Image from './Image';
const Row = (props) => {
   return(
      <div className={styles.content__row}>
         <Image image={img} />
         <Image image={img} />
         <Image image={img} />
         <Image image={img} />
         <Image image={img} />
         <Image image={img} />
         <Image image={img} />
         <Image image={img} />
         <Image image={img} />
         <Image image={img} />
      </div>
   );
};
export default Row;