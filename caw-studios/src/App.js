import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Orders } from './Component/Orders';
import { Shipment } from './Component/Shipment';
import { Product } from './Component/Product';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Orders/>
   <br/>
   
   <Shipment/>
   <br/>
   <Product/>
    </div>
  );
}

export default App;
