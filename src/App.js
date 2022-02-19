//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {

  const mensajeBienvenida = 'ELEGÍ TU TATUAJE'
  const styleH1 ={
    color: "brown",
    fontSize:"30px"
  }
  return (
    <>
    <NavBar></NavBar>
    <div className="App">
      <h1 style={styleH1} className="p-10">{mensajeBienvenida}</h1>
      <Footer name='Clari'>
      </Footer>
    </div>
    </>
  );
}

export default App;
