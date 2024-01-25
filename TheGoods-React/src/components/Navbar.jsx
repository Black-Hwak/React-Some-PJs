import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import Loading from './Loading';

const Navbar = () => {
  const {cartItems} = useSelector((state)=> state.cart);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    },[])
    const fetchProducts = async ()=>{
      try {
        setIsLoading(true);
        const response = await fetch('https://dummyjson.com/products');
        const { products } = await response.json();
        setProducts(products);
        setIsLoading(false);
    } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
    }
    }
   
     if(isLoading){
      return (<Loading/>)
    }

    const filteredProducts = products.filter(item => item.title.toLowerCase().includes(search));

    const searchHandler = (e) => {
      e.preventDefault();
      navigate('/search', {state:{filteredProducts}});
    }
  
  return (
    <nav className=" p-4 flex items-center justify-around text-[#00A9FF] shadow-md py-6">
      <div className="flex items-center space-x-5">
        <Link to={'/'}>
        <span className="text-2xl font-bold">Conformity</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
          <form action="" onSubmit={searchHandler}>
          <input value={search} onChange={(e) => {
              setSearch(e.target.value);
            }}
              type="text"
              placeholder="Search..."
              className="py-2 px-4 rounded-md shadow bg-slate-100 text-[00A9FF] focus:outline-none focus:ring focus:border-blue-300"
            />
          </form>
            <span className="absolute right-3 top-3 text-gray-400">
              <FaSearch />
            </span>
          </div>
        </div>
      </div>
     <Link to={'/addtocart'}>
     <div className="flex items-center space-x-4 relative">
        <span className="cursor-pointer ">
          <FaShoppingCart size={25} />
        </span>
        <div className="bg-red-500 text-white rounded-full  w-6 h-6 flex items-center justify-center absolute bottom-4 left-[-2]">
          {cartItems.length}
        </div>
      </div>
     </Link>
    </nav>
  );
};

export default Navbar;
