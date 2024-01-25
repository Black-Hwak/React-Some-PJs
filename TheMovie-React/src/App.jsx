import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Header from './pages/Header';
import Popular from './pages/MovieContainer';
import Path from './routes/Path';
import MovieContainer from './pages/MovieContainer';
import Error404 from './components/Error404';

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);
  return (
    <div>
      {!isOnline ? (
          <Error404 />
        ) : (
        <div>
          <Navbar/>
          <Path/>
        </div>
        )}
    </div>
  )
}

export default App
