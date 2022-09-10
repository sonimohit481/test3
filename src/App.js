import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Navbar } from './Components/Navbar';
import { ProductAdd } from './Components/ProductAdd';
import { Productedit } from './Components/Productedit';
import { Productid } from './Components/Productid';

function App() {
  return (
    <div className="App">
      <h2>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} >Home</Route>
          <Route path='/login' element={<Login />} >Login</Route>
          <Route path='/product/add' element={< ProductAdd />} >ProductAdd</Route>
          <Route path='/product/:id' element={<Productid />} >Productid</Route>
          <Route path='/product/:id/edit' element={<Productedit />} >Productedit</Route>
        </Routes>

      </h2>
    </div>
  );
}

export default App;
