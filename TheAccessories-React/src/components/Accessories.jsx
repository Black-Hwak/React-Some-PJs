import React from 'react'
import { useCustomStateContext } from '../context/StateContext'
import Accessory from './Accessory';
import { AnimatePresence, motion } from "framer-motion"


const Accessories = () => {
    const {state : {products}, filteredCategory} = useCustomStateContext();
  return (
    <motion.div layout className='container mx-auto'>
      <AnimatePresence>

      <div className='flex flex-wrap justify-center items-center gap-10 my-10'>
      {filteredCategory?.map(product =>{
        return(
          <Accessory key={product.id} {...product}/>
        )
      })}
    </div>
      </AnimatePresence>
    </motion.div>
  )
}

export default Accessories
