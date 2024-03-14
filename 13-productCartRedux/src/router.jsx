import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import App from './App';
import { CartItem } from './components/CartItem/CartItem';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<CartItem />} />
    </>
  )
);
