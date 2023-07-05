import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Pages/Users/Dashboard/Dashboard';
import ProductDetails from './Components/Pages/Users/Products/ProductDetails';
import Navbar from './Components/Pages/Users/Dashboard/NavBar';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
