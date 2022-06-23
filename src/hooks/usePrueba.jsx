import { useState } from 'react';

const usePrueba = () => {
  const [count, setcount] = useState(0);

  const increase = () => {
    setcount(count + 1);
  };

  const reset = () => {
    setcount(0);
  };

  return { count, increase, reset };
};

export default usePrueba;
