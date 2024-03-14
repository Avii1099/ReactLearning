import { createSlice } from '@reduxjs/toolkit';

// [
//   // {
//   //   id: 12,
//   //   name: 'Nike Air Force 1 07 LV8',
//   //   href: '#',
//   //   price: '₹47,199',
//   //   originalPrice: '₹48,900',
//   //   discount: '5% Off',
//   //   color: 'Orange',
//   //   size: '8 UK',
//   //   imageSrc:
//   //     'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
//   // },
// ],

const carts = JSON.parse(localStorage.getItem('carts')) ?? [];
let totalPrice = 0;
carts.forEach((element) => {
  totalPrice += Number(element.price);
});
const initialState = {
  cartProduct: carts,
  totalCartProduct: carts.length,
  totalPrice: totalPrice,
  isAlreadyExists: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const existingIndex = state.cartProduct.findIndex(
        (item) => item.id === actions.payload.id
      );

      if (existingIndex >= 0) {
        state.isAlreadyExists = true;
      } else {
        state.isAlreadyExists = false;
        state.cartProduct.push({
          id: actions.payload.id,
          name: actions.payload.name,
          price: actions.payload.price,
          imageSrc: actions.payload.image,
          color: actions.payload.selectedColor.toUpperCase(),
          size: actions.payload.selectedSize,
        });
        state.totalCartProduct += 1;
        state.totalPrice += Number(actions.payload.price);
      }
    },
    removeFromCart: (state, actions) => {
      state.isAlreadyExists = false;
      state.cartProduct = state.cartProduct.filter(
        (product) => product.id !== actions.payload.id
      );
      state.totalCartProduct = state.totalCartProduct
        ? state.totalCartProduct - 1
        : 0;
      state.totalPrice = state.totalPrice
        ? state.totalPrice - Number(actions.payload.price)
        : 0;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
