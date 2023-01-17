import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">

      <Person 
        firstName = { "Bernard " }
        lastName = { "Olaires" }
        age = {26}
        hairColor = { "Black" }
        />

      <Person 
        firstName = { "Jordan " }
        lastName = { "Jaradenson" }
        age = {22}
        hairColor = { "Blonde" }
        />

    </div>
  );
}

export default App;
