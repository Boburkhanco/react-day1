import { Fragment } from 'react';
import './index.css';
import Header from './components/header';
import Hero from './components/hero';
import Intro from './components/intro';
import About from './components/about';
import Info from './components/info';
import More from './components/more';
import Footer from './components/footer';

function App() {
  return (
      <Fragment>
        <Header />
        <Hero />
        <Intro />
        <About />
        <Info />
        <More />
        <Footer />
      </Fragment>
  );
}

export default App;