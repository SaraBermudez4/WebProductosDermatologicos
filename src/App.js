import { Provider } from 'react-redux'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import PedirDomicilio from "./components/PedirDomicilio";
import ListarDomicilio from "./components/ListarDomicilio";
import Store from './store/Store'
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <NavBar />
        <Slider />
        <div className="container text-center">
          <div className="row mt-3">
            <div className="col" id="pedirAhora">
              <PedirDomicilio />
            </div>
            <div className="col">
              <ListarDomicilio />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
