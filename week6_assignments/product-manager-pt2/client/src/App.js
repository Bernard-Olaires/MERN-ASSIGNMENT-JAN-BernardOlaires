import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import ProductShowOne from './components/ProductShowOne';
import Main from './views/Main';
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/oneProduct/:id' element={<ProductShowOne/>} />
      </Routes>

      

    
    </div>
    </BrowserRouter>
  );
}

export default App;

