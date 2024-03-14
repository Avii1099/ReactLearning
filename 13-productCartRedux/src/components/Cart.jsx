import { useSelector, useDispatch } from 'react-redux';
import { X } from 'lucide-react';
import { indianCurrency } from '../utils/utils';
import { removeFromCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';
function Cart() {
  const cartProduct = useSelector((state) => state.cart.cartProduct);
  const totalCartProduct = useSelector((state) => state.cart.totalCartProduct);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  if (cartProduct && cartProduct.length != 0) {
    return (
      <div className="flex-2 p-4 border-l-2 border-gray-200">
        <div>
          <div className="mt-6 space-y-6">
            <ul className="space-y-4">
              {cartProduct.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4 flex-grow">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="h-16 w-16 rounded object-contain"
                    />
                    <div>
                      <h3 className="text-sm text-gray-900">{product.name}</h3>
                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dd className="inline font-bold">
                            Price: ₹{indianCurrency(product.price)}
                          </dd>
                        </div>
                        <div>
                          <dt className="inline">Color:</dt>{' '}
                          <dd className="inline">{product.color}</dd>
                        </div>
                        <div>
                          <dt className="inline">Size:</dt>{' '}
                          <dd className="inline">{product.size}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCart({
                          id: product.id,
                          price: product.price,
                        })
                      )
                    }
                    className="ml-auto"
                  >
                    <X />{' '}
                  </button>
                </li>
              ))}
            </ul>

            <div className="space-y-4 text-center">
              Total: ₹ {indianCurrency(totalPrice)}
              <Link to={'/cart'}>
                <button
                  type="button"
                  className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  View Cart ({totalCartProduct})
                </button>
              </Link>
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Cart;
