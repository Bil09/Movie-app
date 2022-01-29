import styles from '../../../styles/Sass/Content.module.scss';
import img from '../../../furious.jpg'
import Image from './Image';
import { useContext, useEffect } from 'react';
import {movieContext} from '../../../context/MoviesProvider';
const Row = (props) => {

   const movies = useContext(movieContext);
   return(
      <div className={styles.content__row}>
         {movies.map((movie) => {
             return <Image Image={movie.posterUrl} key={movie.id} />
         })}   
      </div>
   );
};
export default Row;