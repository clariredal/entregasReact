//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {

  const mensajeBienvenida = 'ELEGÍ TU TATUAJE'
  const styleH1 ={
    color: "brown",
    fontSize:"30px"
  }

  return (
    <>
    <NavBar props={NavBar}/>
    <div className="App">
      <h1 style={styleH1} className="p-10">{mensajeBienvenida}</h1>
      <ItemListContainer props={ItemListContainer}/>
      <Footer name='Clari'></Footer>
    </div>
    </>
  );
}

export default App;
