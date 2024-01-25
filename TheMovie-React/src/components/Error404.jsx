import React from 'react';

const Error404 = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
     <h2 className='text-5xl text-red-500 mb-3'>404 Not Found</h2>
      <p className='text-2xl text-[#D9E4EC]'>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default Error404;
