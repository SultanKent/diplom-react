import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import OurCoffee from '../pages/OurCoffee/OurCoffee';
import ForYourPleasure from '../pages/Pleasure/ForYourPleasure';
import CoffeeDetail from '../components/CoffeeDetail/CoffeeDetail'; 

const Routes = ({ coffees }) => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/our-coffee" element={<OurCoffee />} />
      <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
      <Route path="/coffee/:name" element={<CoffeeDetail coffees={coffees} />} />
    </RouterRoutes>
  );
};

export default Routes;