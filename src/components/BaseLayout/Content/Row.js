import styles from '../../../styles/Sass/Content.module.scss';
import Image from './Image';

const Row = (props) => {
   //top rated
   const movieList = props.movies;
   console.log(movieList);
   return(
      <div className={styles.content__row}>
         {movieList && movieList.map((movie) => {
             return <Image image={'https://image.tmdb.org/t/p/original' +  movie.poster_path} key={movie.id} descri={movie.overview} />
         })}   
      </div>
   );
};
export default Row;