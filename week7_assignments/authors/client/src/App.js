import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AllAuthors from './components/AllAuthors';
import EditAuthor from '../../../authors/client/src/components/EditAuthor';
import CreateAuthor from '../../../authors/client/src/components/CreateAuthor';

function App() {

  const [allAuthors, setAllAuthors] = useState([]);

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<AllAuthors allAuthors={allAuthors} setAllAuthors={setAllAuthors}/>}/>
        <Route path='/newAuthor/form' element={<CreateAuthor allAuthors={allAuthors} setAllAuthors={setAllAuthors}/>}/>
        <Route path='/updateAuthor/:id' element={<EditAuthor />}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
