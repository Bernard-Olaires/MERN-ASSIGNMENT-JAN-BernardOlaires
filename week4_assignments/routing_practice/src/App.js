import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/number/:number' element={<Number />} />
        <Route path='/word/:word' element={<Word />} />
        <Route path='/:word/:backgroundColor/:wordColor' element={<ChangeColor />} />
      </Routes>

    </div>
  );
}

export default App;
