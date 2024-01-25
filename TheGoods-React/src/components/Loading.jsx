import React from 'react';
import { Loader } from '@mantine/core';

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
     <Loader color="blue" />Loading...
    </div>
  );
}

export default Loading;
