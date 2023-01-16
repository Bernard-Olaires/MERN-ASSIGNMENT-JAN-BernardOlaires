import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">

      <PersonCard 
        firstName = { "Bernard" }
        lastName = { "Olaires" }
        age = {26}
        hairColor = {"Black"}
      />

      <PersonCard 
        firstName = { "Jordan" }
        lastName = { "Jaradenson" }
        age = {22}
        hairColor = {"Blonde"}
      />

      <PersonCard 
        firstName = { "Patrick" }
        lastName = { "Olaires" }
        age = {25}
        hairColor = {"Black"}
      />



    </div>
  );
}

export default App;
