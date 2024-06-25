import { Route, Routes } from 'react-router-dom';
import { Main } from './containers/Main/Main';
import { Cart } from './containers/Cart/Cart';
import { Delivery } from './containers/Delivery/Delivery';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Container } from '@radix-ui/themes';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { useState } from 'react';
import { ICard } from './types';
import { nanoid } from 'nanoid';
import { Footer } from './components/Footer/Footer';
import { Alert } from './components/Alert/Alert';

import HeroinImage from '/herion.jpg';
import CocaineImage from '/Cocaine.jpg';
import MarijuanaImage from '/maria.jpg';
import MephedroneImage from '/mefedron.jpg';
import HashishImage from '/gashish.jpg';
import AmphetamineImage from '/amfetamin.jpg';

export const App = () => {
  const [drugs, setDrugs] = useState<ICard[]>([
    {
      id: nanoid(),
      name: 'Mephedrone',
      price: 1200,
      type: 'Stimulants',
      gram: 0.3,
      count: 1,
      img: MephedroneImage,
    },
    {
      id: nanoid(),
      name: 'Cocaine',
      price: 2300,
      type: 'Stimulants',
      gram: 0.2,
      count: 2,
      img: CocaineImage,
    },
    {
      id: nanoid(),
      name: 'Hashish',
      price: 1700,
      type: 'Cannabinoids',
      gram: 0.4,
      count: 0,
      img: HashishImage,
    },
    {
      id: nanoid(),
      name: 'Amphetamine',
      price: 1199,
      type: 'Stimulants',
      gram: 0.5,
      count: 1,
      img: AmphetamineImage,
    },
    {
      id: nanoid(),
      name: 'Heroin',
      price: 1999,
      type: 'Opioids',
      gram: 0.3,
      count: 0,
      img: HeroinImage,
    },
    {
      id: nanoid(),
      name: 'Marijuana',
      price: 999,
      type: 'Cannabinoids',
      gram: 0.5,
      count: 0,
      img: MarijuanaImage,
    },
  ]);

  const addToCart = (card: ICard) => {
    setDrugs((prevState) => {
      return prevState.map((drug) => {
        if (drug.id === card.id) {
          return { ...drug, count: drug.count + 1 };
        }
        return drug;
      });
    });
  };

  const removeFromCart = (card: ICard) => {
    if (card.count > 0) {
      setDrugs((prevState) => {
        return prevState.map((drug) => {
          if (drug.id === card.id) {
            return { ...drug, count: drug.count - 1 };
          }
          return drug;
        });
      });
    }
  };

  return (
    <Container width={'400px'} height={'100%'}>
      <header>
        <Toolbar my={'3'} />
        <Header my={'3'} />
      </header>
      <main>
        <Banner my={'3'} />
      </main>
      <Routes>
        <Route
          path='/'
          element={
            <Main
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              drugsList={drugs}
            />
          }
        />
        <Route
          path='/cart'
          element={
            <Cart
              increaseCount={addToCart}
              removeFromCart={removeFromCart}
              drugs={drugs}
            />
          }
        >
          <Route path={'order'} element={<Alert drugs={drugs} />} />
        </Route>
        <Route path='/order' element={<Delivery drugs={drugs} />} />
      </Routes>
      <footer>
        <Footer my={'3'} />
      </footer>
    </Container>
  );
};
