import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.startsWith('cart/')) {
    localStorage.setItem(
      'carts',
      JSON.stringify(store.getState().cart.cartProduct)
    );
  }
  return result;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
