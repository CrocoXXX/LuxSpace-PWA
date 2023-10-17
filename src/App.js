import React from 'react';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Clients from './components/Clients';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    (async function () {
      // Call data from API
      const response = await fetch(' https://bwacharity.fly.dev/items', {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          // 'x-api-key': process.env.REACT_APP_APIKEY
        }
      })

      const { nodes } = await response.json()
      // console.log(nodes);
      setItems(nodes)
    })()
  }, [])

  return (
    <>
      <Header />
      <HeroSection />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
