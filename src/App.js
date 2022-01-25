import { Fragment } from 'react';
import './styles/Sass/App.module.scss';
import Header from './components/BaseLayout/Header/Header';
import Content from './components/BaseLayout/Content/Content';

function App() {
  return (
    <Fragment>
      <Header />
      <Content />
      <div>hello</div>
    </Fragment>
  );
}

export default App;
