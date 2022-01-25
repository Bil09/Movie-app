import React from "react";
import Row from "./Row";
import styles from '../../../styles/Sass/Content.module.scss';

const Content = () => {
   return(
      <div className={styles.content__div}>
         <p>hello world</p>
         <Row />
      </div>
   );
};
export default Content;