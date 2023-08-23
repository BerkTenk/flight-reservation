import logo from './logo.svg';
import './App.css';
import SearchForm from './Components/SearchForm';
import FlightList from './Components/FlightList';

function App() {
  return (
    <div className="App">
      <h1>Flight Search App</h1>
      <SearchForm/>
      <FlightList flights={[]} loading = {false} />
    </div>
  );
}

export default App;
