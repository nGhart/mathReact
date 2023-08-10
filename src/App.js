import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <div className="middleContent">
        <Routing />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
