import React, { useEffect, useState } from 'react';
import { useCustomStateContext } from '../context/StateContext';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { state: { products }, categories, setFilteredCategory } = useCustomStateContext();

  useEffect(() => {
    // Filter products based on the selected category
    if(activeCategory === 'All'){
      setFilteredCategory(products);
      return;
    }
    const filterCategory = products.filter(item => item.category === activeCategory);

    // Update the filtered category in the global state
    setFilteredCategory(filterCategory);
  }, [activeCategory, products, setFilteredCategory]);

  return (
    <div className='flex justify-center mt-5'>
      <button
        className={`py-2 px-3 border capitalize mx-3 rounded-sm text-sm ${
          activeCategory === 'All' ? 'bg-stone-900 text-white' : 'border-stone-900'
        }`}
        onClick={() => setActiveCategory('All')}
      >
        All
      </button>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-3 border capitalize mx-3 rounded-sm text-sm ${
              activeCategory === category ? 'bg-stone-900 text-white' : 'border-stone-900'
            }`}
            onClick={() => setActiveCategory(category.toLowerCase())}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
