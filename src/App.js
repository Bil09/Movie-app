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
    const fetchMovie = async () => {
      try{
         const response = await fetch(url_top);
         const data = await response.json();
         console.log(`FETCH WITH URL`);
         setTopRated(data);
      } catch (err){
         console.log(err);
      }
   };
    //popular
    const fetchMovieV1 = async (url) => {
      try{
         const response = await fetch(url_popular);
         const data = await response.json();
         console.log(`FETCH WITH URL`);
         setPopular(data);
      } catch (err){
         console.log(err);
      }
   };
    //upcoming
    const fetchMovieV2 = async (url) => {
      try{
         const response = await fetch(url_upcoming);
         const data = await response.json();
         console.log(`FETCH WITH URL`);
         setUpcoming(data);
      } catch (err){
         console.log(err);
      }
   };
   fetchMovie();
   fetchMovieV1();
   fetchMovieV2();
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
