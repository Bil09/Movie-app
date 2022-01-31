import React, { useContext } from "react";
import Row from "./Row";
import styles from '../../../styles/Sass/Content.module.scss';
import * as movie from '../../../context/MoviesProvider';

const Content = () => {
   const top = useContext(movie.topRatedContext); 
   console.log(top)
   const up = useContext(movie.upcomingContext);
   const pop = useContext(movie.popularContext);
   return(
      <div className={styles.content}>
         <div className={styles.content__section}>
            <h2 className={styles.content__title}>Top rated</h2>
            <Row movies={top.results} />
         </div>
         <div className={styles.content__section}>
            <h2 className={styles.content__title}>Popular</h2>
            <Row movies={pop.results} />
         </div>
         <div className={styles.content__section}>
            <h2 className={styles.content__title}>Coming soon</h2>
            <Row movies={up.results} />
         </div>
      </div>
   );
};
export default Content;