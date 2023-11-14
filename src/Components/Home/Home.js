import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'; // Your Navbar component

const Home = () => {
  const location = useLocation();
  const { state } = location;

  const userViews = state && state.userViews;

  return (
    <div>
      <Navbar userViews={userViews} />
      {/* Your other content */}
    </div>
  );
};

export default Home;
