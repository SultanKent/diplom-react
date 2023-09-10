import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './components/Routes';

const App = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCoffees(data.coffee);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes coffees={coffees} /> 
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
