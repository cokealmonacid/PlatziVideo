/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <Search />
      {
        initialState.mylist.length && (
          <Categories title='Mi lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends.map((item) => <CarouselItem {...item} key={item.id} />)
          }
        </Carousel>
      </Categories>
      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {
            initialState.originals.map((item) => <CarouselItem {...item} key={item.id} />)
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
