import { Fragment } from 'react';
import './styles/Sass/App.module.scss';
import Header from './components/BaseLayout/Header/Header';
import Content from './components/BaseLayout/Content/Content';
import Footer from './components/BaseLayout/Footer/Footer';
import { useEffect } from 'react';
import {MoviesProvider} from './context/MoviesProvider';

function App() {
  //Effect
  return (
    <Fragment>
      <Header />
      <MoviesProvider>
        <Content />
      </MoviesProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
