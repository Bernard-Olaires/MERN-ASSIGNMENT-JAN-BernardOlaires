import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import ProductShowOne from './components/ProductShowOne';
import Main from './views/Main';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Edit from './components/Edit';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/oneProduct/:id' element={<ProductShowOne/>} />
        <Route path='/editProduct/:id' element={<Edit/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

