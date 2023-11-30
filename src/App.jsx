import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery'
import Form from './components/HornForm'
import jsonData from './assets/HornedBeast.json'
import HornForm from './components/HornForm';


function App() {
  // match to file name
  return (
    <>
      <Header title="Gallery of Horns" />
      <Gallery jsonData={jsonData} />
      <HornForm />
      <Footer author="Rhett Chase"/>
    </>
  );
}

export default App;
