import React, { useState } from "react";

//aca
const topRatedContext = React.createContext({});
const dispatchTopRatedContext = React.createContext({});
//aca
//const lastRelContext = React.createContext([]);
//const dispatchLastRelContext = React.createContext([]);
//aca
const popularContext = React.createContext({});
const dispatchPopularContext = React.createContext({});
//aca
const upcomingContext = React.createContext({});
const dispatchUpcomingContext = React.createContext({});

const MoviesProvider = (props) => {
   const [topRated, setToprated] = useState({});
   const [popular, setPopular] = useState({});
   const [lastRel, setLastRel] = useState({});
   const [upcoming, setUpcoming] = useState({});
   console.log(topRated)
   return(
      <topRatedContext.Provider value={topRated}>
         <dispatchTopRatedContext.Provider value={setToprated}>
                  <popularContext.Provider value={popular}>
                     <dispatchPopularContext.Provider value={setPopular}>
                        <upcomingContext.Provider value={upcoming}>
                           <dispatchUpcomingContext.Provider value={setUpcoming}>
                              {props.children}
                           </dispatchUpcomingContext.Provider>
                        </upcomingContext.Provider>
                     </dispatchPopularContext.Provider>
                  </popularContext.Provider>
         </dispatchTopRatedContext.Provider>
      </topRatedContext.Provider>
   )
}
export {MoviesProvider, upcomingContext, topRatedContext, popularContext, dispatchUpcomingContext, dispatchTopRatedContext, dispatchPopularContext};