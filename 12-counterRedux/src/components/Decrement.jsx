import { Minus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toDecrement } from '../features/Counter';
function Decrement() {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="mx-4 rounded-full bg-black px-3 py-3 text-sm font-semibold
   text-white shadow-sm hover:bg-black/80 focus-visible:outline 
   focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-black"
      onClick={() => dispatch(toDecrement())}
    >
      <Minus className="h-4 w-4" />
    </button>
  );
}

export default Decrement;
