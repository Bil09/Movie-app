import { Fragment, useContext, useState } from 'react';
import './styles/Sass/App.module.scss';
import Header from './components/BaseLayout/Header/Header';
import Content from './components/BaseLayout/Content/Content';
import Footer from './components/BaseLayout/Footer/Footer';
import { useEffect } from 'react';
import * as movie from './context/MoviesProvider';
//import fetchMovie from './utilis/fetchMovie';

function App() {
  //API url
  const url_top = `https://api.themoviedb.org/3/movie/top_rated/?api_key=${process.env.REACT_APP_API_KEY}`;
  const url_last = `https://api.themoviedb.org/3/movie/latest/?api_key=${process.env.REACT_APP_API_KEY}`;
  const url_upcoming = `https://api.themoviedb.org/3/movie/upcoming/?api_key=${process.env.REACT_APP_API_KEY}`;
  const url_popular = `https://api.themoviedb.org/3/movie/popular/?api_key=${process.env.REACT_APP_API_KEY}`;
  //dispatch context
  const setTopRated = useContext(movie.dispatchTopRatedContext);
  const setPopular = useContext(movie.dispatchPopularContext);
  //const setLastReleased = useContext(movie.dispatchLastRelContext);
  const setUpcoming = useContext(movie.dispatchUpcomingContext);

  //Effect
  useEffect(() => {
    //top rated
    const fetchMovie = async (url, setList) => {
      try{
         const response = await fetch(url);
         const data = await response.json();
         console.log(data);
         setList(data);
      } catch (err){
         console.log(err);
      }
   };
   fetchMovie(url_top, setTopRated);
   fetchMovie(url_upcoming, setUpcoming);
   fetchMovie(url_popular, setPopular);
  },[])
  //
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
}

export default App;
