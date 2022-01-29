import React from "react";
import moviesObj from "./movies";

const movieContext = React.createContext({});

const MoviesProvider = (props) => {
   return(
      <movieContext.Provider value={moviesObj.movies}>
         {props.children}
      </movieContext.Provider>
   )
}
export {MoviesProvider, movieContext};