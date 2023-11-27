import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import Gallery from './components/Gallery'

function App() {
  // match to file name
  return (
    <>
      <Header title="Gallery of Horns" />
      <Gallery />
      {/* <Footer /> */}
    </>
  );
}

export default App;
