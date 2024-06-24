import { Route, Routes } from 'react-router-dom';
import { Main } from './containers/Main/Main';
import { Cart } from './containers/Cart/Cart';
import { Favorite } from './containers/Favorite/Favorite';
import { Notification } from './containers/Notification/Notification';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Container, Flex } from '@radix-ui/themes';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Tabs } from './components/Tabs/Tabs';
import { useState } from 'react';
import { drugsTypes, ICard } from './types';
import { nanoid } from 'nanoid';

import HeroinImage from './../public/herion.jpg';
import CocaineImage from './../public/Cocaine.jpg';
import MarijuanaImage from './../public/maria.jpg';
import MephedroneImage from './../public/mefedron.jpg';
import HashishImage from './../public/gashish.jpg';
import AmphetamineImage from './../public/amfetamin.jpg';

export const App = () => {
  const [drugs, setDrugs] = useState<ICard[]>([
    {
      id: nanoid(),
      name: 'Mephedrone',
      price: 1200,
      type: 'Stimulants',
      gram: 0.3,
      count: 0,
      img: MephedroneImage,
    },
    {
      id: nanoid(),
      name: 'Cocaine',
      price: 2300,
      type: 'Stimulants',
      gram: 0.2,
      count: 0,
      img: CocaineImage,
    },
    {
      id: nanoid(),
      name: 'Hashish',
      price: 2300,
      type: 'Cannabinoids',
      gram: 0.2,
      count: 0,
      img: HashishImage,
    },
    {
      id: nanoid(),
      name: 'Amphetamine',
      price: 1000,
      type: 'Stimulants',
      gram: 0.5,
      count: 0,
      img: AmphetamineImage,
    },
    {
      id: nanoid(),
      name: 'Heroin',
      price: 2300,
      type: 'Opioids',
      gram: 0.2,
      count: 0,
      img: HeroinImage,
    },
    {
      id: nanoid(),
      name: 'Marijuana',
      price: 2300,
      type: 'Cannabinoids',
      gram: 0.2,
      count: 0,
      img: MarijuanaImage,
    },
  ]);
  const [drugsFilter, setDrugsFilter] = useState<drugsTypes>('All');

  const changeFilter = (filter: drugsTypes) => setDrugsFilter(filter);

  return (
    <Container width={'400px'}>
      <header>
        <Toolbar my={'3'} />
        <Header my={'3'} />
      </header>
      <main>
        <Banner my={'3'} />
      </main>
      <section>
        <Flex
          justify={'between'}
          align={'center'}
          gap={'1'}
          my={'3'}
          wrap={'wrap'}
        >
          <Tabs name={'All'} onTabChange={() => changeFilter('All')} />
          <Tabs
            name={'Stimulants'}
            onTabChange={() => changeFilter('Stimulants')}
          />
          <Tabs name={'Opioids'} onTabChange={() => changeFilter('Opioids')} />
          <Tabs
            name={'Cannabinoids'}
            onTabChange={() => changeFilter('Cannabinoids')}
          />
        </Flex>
      </section>
      <Routes>
        <Route
          path='/'
          element={<Main currentFilter={drugsFilter} drugsList={drugs} />}
        />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/notification' element={<Notification />} />
      </Routes>
    </Container>
  );
};
