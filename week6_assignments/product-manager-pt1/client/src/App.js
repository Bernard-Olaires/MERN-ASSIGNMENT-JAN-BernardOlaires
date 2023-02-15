import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import ProductForm from './components/ProductForm';

function App() {

  return (
    <div className="App">
      <ProductForm />
    </div>
  );
}

export default App;
