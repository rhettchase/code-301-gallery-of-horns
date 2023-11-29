import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery'
import jsonData from './assets/HornedBeast.json'


function App() {
  // match to file name
  return (
    <>
      <Header title="Gallery of Horns" />
      <Gallery jsonData={jsonData} />
      <Footer author="Rhett Chase"/>
    </>
  );
}

export default App;
