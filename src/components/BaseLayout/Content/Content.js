import React from "react";
import Row from "./Row";
import styles from '../../../styles/Sass/Content.module.scss';

const Content = () => {
   return(
      <div className={styles.content}>
         <div className={styles.content__section}>
            <h2 className={styles.content__title}>Last relaeses</h2>
            <Row />
         </div>
         <div className={styles.content__section}>
            <h2 className={styles.content__title}>Top rated</h2>
            <Row />
         </div>
         <div className={styles.content__section}>
            <h2 className={styles.content__title}>Most Viewed</h2>
            <Row />
         </div>
         <div className={styles.content__section}>
            <h2 className={styles.content__title}>Coming soon</h2>
            <Row />
         </div>
         <div className={styles.content__section}>
            <h2 className={styles.content__title}>Your List</h2>
            <Row />
         </div>
      </div>
   );
};
export default Content;