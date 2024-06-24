import { Route, Routes } from 'react-router-dom';
import { Main } from './containers/Main/Main';
import { Cart } from './containers/Cart/Cart';
import { Favorite } from './containers/Favorite/Favorite';
import { Notification } from './containers/Notification/Notification';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Container } from '@radix-ui/themes';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Tabs } from './components/Tabs/Tabs';

export const App = () => {
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
        <Tabs my={'3'} />
      </section>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/notification' element={<Notification />} />
      </Routes>
    </Container>
  );
};
