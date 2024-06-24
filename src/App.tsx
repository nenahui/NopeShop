import { Route, Routes } from 'react-router-dom';
import { Main } from './containers/Main/Main';
import { Cart } from './containers/Cart/Cart';
import { Favorite } from './containers/Favorite/Favorite';
import { Notification } from './containers/Notification/Notification';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Box } from '@radix-ui/themes';

export const App = () => {
  return (
    <Box width={'400px'}>
      <header>
        <Toolbar />
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/notification' element={<Notification />} />
      </Routes>
    </Box>
  );
};
