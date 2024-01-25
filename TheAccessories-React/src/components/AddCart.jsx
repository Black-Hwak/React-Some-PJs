import React, { useEffect, useState } from 'react';
import { useCustomStateContext } from '../context/StateContext';
import Cart from './Cart';

const AddCart = () => {
  const { state: { carts }, dispatch } = useCustomStateContext();

  // Use array destructuring to correctly get mainTotal and setMainTotal from useState
  const [mainTotal, setMainTotal] = useState(0);

  useEffect(() => {
    // Calculate the total when the component mounts
    const initialTotal = total();
    setMainTotal(initialTotal);
  }, [carts]);

  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };

  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };

  const total = () => carts?.reduce((pv, cv) => pv + cv.price, 0) || 0;

  return (
    <div>
      <div className='flex flex-col'>
        {carts?.map(item => {
          return (
            <Cart key={item.id} {...item} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal} />
          );
        })}
      </div>
      <hr className='w-[75%] mx-auto' />
      <div className='flex justify-around'>
        <h2>Total</h2>
        <p>{mainTotal.toFixed(2)}</p>
      </div>
      <div className='flex justify-center'>
        <button onClick={() => {
            dispatch({type: "CLEAR"})
        }} className='border-2 border-red-500 rounded-lg shadow-sm p-4 text-red-700'>Clear Cart</button>
      </div>
    </div>
  );
};

export default AddCart;
