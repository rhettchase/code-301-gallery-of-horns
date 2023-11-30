import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import HornForm from './components/HornForm';
import allBeastsData from './assets/HornedBeast.json';

function App() {
  const [filteredBeasts, setFilteredBeasts] = useState(allBeastsData);
  const handleSelect = (selection) => {
    const updatedBeasts = allBeastsData.filter(beast => beast.horns === parseInt(selection));
    setFilteredBeasts(updatedBeasts);
  }
  return (
    <>
      <Header title='Gallery of Horns' />
      <Gallery beasts={filteredBeasts} />
      <HornForm onSelect={handleSelect} />
      <Footer author='Rhett Chase' />
    </>
  );
}

export default App;


