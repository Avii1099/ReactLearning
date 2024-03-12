import { Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toIncrement } from '../features/Counter';
function Increment() {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="rounded-full bg-black px-3 py-3 text-sm font-semibold
   text-white shadow-sm hover:bg-black/80 focus-visible:outline 
   focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-black"
      onClick={() => dispatch(toIncrement())}
    >
      <Plus className="h-4 w-4" />
    </button>
  );
}

export default Increment;
