import products from './products.json';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { indianCurrency } from '../utils/utils';
import { useState } from 'react';
import ErrorDialog from './ ErrorDialog';

export function Product() {
  const dispatch = useDispatch();

  const isAlreadyExists = useSelector((state) => state.cart.isAlreadyExists);

  const [showError, setShowError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState('');

  const handleAddToCart = (item) => {
    if (isAlreadyExists) {
      setShowErrorMessage('This item is already in your Cart');
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    } else {
      dispatch(addToCart(item));
    }
  };
  return (
    <>
      {showError && <ErrorDialog message={showErrorMessage} />}
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products.products.map((products) => (
          <div key={products.id} className="rounded-md border">
            <img
              src={products.image}
              alt="Laptop"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {products.name}
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                {products.description}
              </p>
              <div className="mt-4">
                {products.hashtags.map((hashtag, index) => (
                  <span
                    key={`hashtag${index}`}
                    className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                  >
                    #{hashtag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Colors : </span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
              </div>
              <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Size : </span>
                {products.size.map((size) => (
                  <span
                    key={size}
                    className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Price : </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  ₹{indianCurrency(products.price)}
                </span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => handleAddToCart(products)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
