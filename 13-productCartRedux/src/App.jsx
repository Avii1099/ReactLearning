import Cart from './components/Cart';
import { Product } from './components/Product';
import { ShoppingCart } from 'lucide-react';
function App() {
  return (
    <>
      <h1 className="text-5xl font-bold flex justify-center items-center">
        <ShoppingCart size={40} /> Amazon
      </h1>
      <div className="flex min-h-screen">
        <div className="flex-1 p-4">
          <Product />
        </div>

        <Cart />
      </div>
    </>
  );
}

export default App;
