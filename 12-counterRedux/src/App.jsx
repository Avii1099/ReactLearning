import { useState, useEffect } from 'react';
import Decrement from './components/Decrement';
import Increment from './components/Increment';
import { useSelector } from 'react-redux';

function App() {
  const value = useSelector((state) => state.counter.value);
  let start_message =
    'To Increment Value click on `+` icon and to decrement click `-`';
  const [message, setMessage] = useState(start_message);

  useEffect(() => {
    if (value > 9) {
      setMessage("Now you can't increase value above 10");
    }
  }, [value]);

  return (
    <>
      <h1 className="w-full px-3 py-3 text-lg flex items-center justify-center">
        Counter: {value}{' '}
      </h1>
      <p className="px-3 py-3 flex items-center justify-center">{message}</p>
      <div className="w-full flex items-center justify-center">
        <Increment />
        <Decrement />
      </div>
    </>
  );
}

export default App;
